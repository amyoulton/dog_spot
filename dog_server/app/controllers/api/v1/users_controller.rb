class Api::V1::UsersController < Api::ApplicationController
    before_action :find_user, only: [:update, :show]

    def create
        user = User.new params.require(:user).permit(:first_name, :last_name, :bio, :email, :password, :password_confirmation)
        if user.save
            render(json: {id: user.id})
        else
            render(json: {status: 422, errors: user.errors})
        end
    end

    def show
        render json: @user
    end


    def update
        @user.update params.require(:user).permit(:first_name, :last_name, :bio, :email, :password, :password_confirmation,)
        render(json: {id: @user.id})
    end

    private

    def find_user 
        @user ||= User.find params[:id]
    end
end
      
