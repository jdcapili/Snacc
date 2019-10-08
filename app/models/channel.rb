# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  channel_name :string           not null
#  creator_id   :string           not null
#

class Channel < ApplicationRecord
  validates :channel_name, presence: true
  validates :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :channel_users, dependent: :destroy
  has_many :subscribers, through: :channel_users, source: :user, dependent: :destroy, inverse_of: :subscribed_channels

  has_many :messages, as: :messageable, inverse_of: :messageable, dependent: :destroy
end
