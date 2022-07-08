class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    # before_action :authorize

    def index 
        reviews = Review.all 
        render json: reviews
    end

    def create 
        review = Review.create(review_params)
        render json :review
    end

    def update
       review = Review.find_by!(id: params[:id])
       review.update!(review_params)
       render json: review
    end

    def destroy 
        review = Review.find_by!(id: params[:id])
        review.destroy
        head :no_content
    end

    
    private 

    def review_params  
        params.permit(:content, :rating, :user_id, :coffee_id)
    end

    def invalid errorobj
        render json: { errors: errorobj.record.errors.full_messages }, status: 422
    end

    def not_found
        render json: {error: "User not found"}, status: 404
    end

    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end


end
