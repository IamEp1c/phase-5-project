class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    # before_action :authorize

    def index 
        users = User.all 
        render json: users, status: 200
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def create 
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end



    private 

    def user_params
        params.permit(:username, :password, :email) 
    end

    def invalid errorobj
        render json: { errors: errorobj.record.errors.full_messages }, status: 422
    end

    def not_found
        render json: {error: "User not found"}, status: 404
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
