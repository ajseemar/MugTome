class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
            return
        else
            render json: {errorList: ["Invalid combination of username and password", "Please try again"], type: "Log In"}, status: 422
        end
    end

    def destroy
        logout()
        render json: {}
    end
end
