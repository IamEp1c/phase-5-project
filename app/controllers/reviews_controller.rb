class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    # before_action :authorize

    def index 
        reviews = Review.order(id: :ASC)
        render json: reviews
    end
    # custom controller
    # def review_for_specific_coffee
    #     review = Review.where(coffee_id: params[:id])
    #     render json: review
    # end

    def create 
        review = Review.create(review_params)
        render json: review
    end

    def update
       review = Review.find(params[:id])
       review.update!(content: params[:content], rating: params[:rating])
       render json: review
    end

    def destroy 
        review = Review.find_by!(id: params[:id])
        review.destroy
        head :no_content
    end

    
    private 

    def review_params  
        params.permit(:content, :rating, :user_id)
    end

    def invalid errorobj
        render json: { errors: errorobj.record.errors.full_messages }, status: 422
    end

    def not_found
        render json: []
    end

    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end


end
