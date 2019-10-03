class Api::SessionsController < ApplicationController
  def create

    errors = [];


    errors.push("username can't be blank") if params[:user][:display_name].length == 0

    if params[:user][:password].nil?
      errors.push("password can't be blank")
    elsif params[:user][:password].length < 6
      errors.push("password too short")
    end
    unless errors.empty?
      render json: errors, status: 401
    else


      @user = User.find_by_credentials(params[:user][:display_name],
      params[:user][:password])

      if @user
        login(@user)
        render "api/users/show"
      else
        render json: ["Username doesn't exist or Wrong Password"], status: 401
      end

    end

  end

  def destroy

    @user = current_user

    if @user
      logout
      render json: {}
    else
      render json: ["Nobody is signed in"], status: 404
    end

  end
end
