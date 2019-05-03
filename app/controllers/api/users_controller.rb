class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/users/user', user: @user
        else
            render json: @user.errors.full_messages
        end
    end

    def show
        @user = User.find(params[:id])
        @user.avatar.attach(params[:avatar])
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :date_of_birth, :gender, :email, :mobile_number, :password, :avatar)
    end
end
