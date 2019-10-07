# == Schema Information
#
# Table name: messages
#
#  id               :bigint           not null, primary key
#  body             :string           not null
#  author_id        :integer          not null
#  messageable_type :string
#  messageable_id   :bigint
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Message < ApplicationRecord
  validates :author_id, null: false
  validates :messageable_type, inclusion: {in: ['Channel','Dm'] }
  
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :messageable, polymorphic: true
end
