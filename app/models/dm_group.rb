# == Schema Information
#
# Table name: dm_groups
#
#  id         :bigint           not null, primary key
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DmGroup < ApplicationRecord

  validates :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :dm_group_users, dependent: :destroy
  has_many :members, through: :dm_group_users, source: :user, dependent: :destroy, inverse_of: :dm_groups

  has_many :messages, as: :messageable, inverse_of: :messageable, dependent: :destroy
end
