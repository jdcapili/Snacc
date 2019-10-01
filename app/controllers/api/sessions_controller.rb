class Api::SessionsController < ApplicationController
  def create
    # debugger
    @user = User.find_by_credentials(params[:user][:display_name],
    params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['invalid credentials'], status: 401
    end

  end

  def destroy

    @user = current_user
    # debugger
    if @user
      logout
      render json: {}
    else
      render json: ["Nobody is signed in"], status: 404
    end

  end
end
