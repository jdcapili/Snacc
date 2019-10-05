class Channel < ApplicationRecord
  validates :channel_name, presence: true
  validates :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :channel_users, dependent: :destroy
  has_many :subscribers, through: :channel_users, source: :user, dependent: :destroy

end
