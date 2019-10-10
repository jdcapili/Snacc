class Api::UsersController < ApplicationController

  def index
    @users = User.includes(:messages,:subscribed_channels, :dm_groups, :owned_channels, :owned_groups).all #.reject(:id => current_user.id)
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)
    channel = Channel.find_by(channel_name: 'general')

    if @user.save
      ChannelUser.create(user: @user, channel: channel)
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:display_name, :email, :password)
  end

end
