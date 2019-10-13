# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Message.destroy_all
DmGroupUser.destroy_all
ChannelUser.destroy_all
DmGroup.destroy_all
Channel.destroy_all
User.destroy_all



demoUser = User.create(display_name: 'DemoUser', email: 'demo@user.com', password:'123456' )
seeduser1 = User.create(display_name: 'I', email: 'demo1@friend.com', password:'123456')
seeduser2 = User.create(display_name: 'Need', email: 'demo2@friend.com', password:'123456')
seeduser3 = User.create(display_name: 'Sleep', email: 'demo3@friend.com', password:'123456')

general = Channel.create(channel_name: 'general', creator_id: demoUser.id)
seedchannel1 = Channel.create(channel_name: 'AppAcademy', creator_id: seeduser1.id)
seedchannel1 = Channel.create(channel_name: 'FullstackProject', creator_id: seeduser1.id)

dmgroup = DmGroup.create(creator_id: demoUser.id)
dmgroup1 = DmGroup.create(creator_id: demoUser.id)

general.subscribers << [demoUser,seeduser1]
dmgroup.members << [demoUser,seeduser2]
dmgroup1.members << [demoUser,seeduser2,seeduser3]