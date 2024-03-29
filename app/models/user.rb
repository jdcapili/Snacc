# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  display_name    :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :display_name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  # Associations
  has_many :owned_channels,
    class_name: :Channel,
    foreign_key: :creator_id
  
  has_many :owned_groups,
    class_name: :DmGroup,
    foreign_key: :creator_id

  has_many :channel_users, dependent: :destroy
  has_many :dm_group_users, dependent: :destroy
  has_many :subscribed_channels, through: :channel_users, source: :channel, inverse_of: :subscribers
  has_many :dm_groups, through: :dm_group_users, source: :dm_group, inverse_of: :members

  has_many :messages, foreign_key: :author_id, class_name: :Message

  # FIGVAPER
  after_initialize :ensure_session_token
  attr_reader :password
  
  def self.find_by_credentials(username, password)
  
    user = User.includes(:messages, :subscribed_channels, :owned_channels, :dm_groups, :owned_groups)
    .find_by(display_name: username)
  
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    v_pass = BCrypt::Password.new(self.password_digest)
    v_pass.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  

end
