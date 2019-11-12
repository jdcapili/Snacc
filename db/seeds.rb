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
seeduser1 = User.create(display_name: 'jdcapili', email: 'demo1@friend.com', password:'123456')
seeduser2 = User.create(display_name: 'UJPyon', email: 'demo2@friend.com', password:'123456')
seeduser3 = User.create(display_name: 'esunwookim619', email: 'demo3@friend.com', password:'123456')
seeduser4 = User.create(display_name: 'kevinktom', email: 'demo4@friend.com', password:'123456')
seeduser5 = User.create(display_name: 'lisali72159', email: 'demo5@friend.com', password:'123456')
seeduser6 = User.create(display_name: 'Tayyab12308', email: 'demo6@friend.com', password:'123456')
seeduser7 = User.create(display_name: 'LegendOfBenji', email: 'demo7@friend.com', password:'123456')
seeduser8 = User.create(display_name: 'chelseamccann', email: 'demo8@friend.com', password:'123456')
seeduser9 = User.create(display_name: 'chunisama', email: 'demo9@friend.com', password:'123456')
seeduser10 = User.create(display_name: 'jonbae', email: 'demo10@friend.com', password:'123456')
seeduser11 = User.create(display_name: 'JonathanVanDyke', email: 'demo11@friend.com', password:'123456')
seeduser12 = User.create(display_name: 'kkossally', email: 'demo12@friend.com', password:'123456')
seeduser13 = User.create(display_name: 'RichM3', email: 'demo13@friend.com', password:'123456')
seeduser14 = User.create(display_name: 'raphiree', email: 'demo14@friend.com', password:'123456')
seeduser15 = User.create(display_name: 'tsheng1', email: 'demo15@friend.com', password:'123456')
seeduser16 = User.create(display_name: 'andreskim', email: 'demo16@friend.com', password:'123456')
seeduser17 = User.create(display_name: 'jc4883', email: 'demo17@friend.com', password:'123456')
seeduser18 = User.create(display_name: 'E-kandilas', email: 'demo18@friend.com', password:'123456')




general = Channel.create(channel_name: 'general', creator_id: demoUser.id)
seedchannel1 = Channel.create(channel_name: 'AppAcademy', creator_id: seeduser1.id)
seedchannel2 = Channel.create(channel_name: 'FullstackProject', creator_id: seeduser1.id)

dmgroup = DmGroup.create(creator_id: demoUser.id)
dmgroup1 = DmGroup.create(creator_id: demoUser.id)

general.subscribers << [demoUser,seeduser1,seeduser2, seeduser3, seeduser4, seeduser5, seeduser6,seeduser7, seeduser8, seeduser9, seeduser10, seeduser11,seeduser12,seeduser13,seeduser14,seeduser15, seeduser16, seeduser17, seeduser18]
seedchannel1.subscribers << [seeduser1, seeduser7]
seedchannel2.subscribers << [seeduser1,seeduser9,seeduser13]
dmgroup.members << [demoUser,seeduser5,seeduser6, seeduser10]
dmgroup1.members << [demoUser,seeduser2,seeduser3]