# == Schema Information
#
# Table name: dm_group_users
#
#  id          :bigint           not null, primary key
#  dm_group_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class DmGroupUser < ApplicationRecord
end
