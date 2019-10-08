# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
Channeluser.destroy_all
Message.destroy_all

demo = User.create(display_name: 'DemoUser', email: 'demo@user.com', password:'123456' )

general = Channel.create(channel_name: 'general', creator_id: demo.id)

ChannelUser.create(user: demo, channel: general)