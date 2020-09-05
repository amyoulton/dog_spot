class Api::V1::ReviewsController < Api::ApplicationController
    # before_action :find_dog
    before_action :find_review, only: :update

    def create
        @dog ||= Dog.find params[:dog_id]
        review = Review.new review_params
        review.dog = @dog
        review.user = current_user
        if review.save
            render json: { id: review.id, dog_id: review.dog_id, description: review.description, rating: review.rating }
        else
            render(
                json: { errors: review.errors },
                status: 422
            )
        end
    end

    def update
        @review.update review_params
        render json: { id: @review.id, dog_id: @review.dog_id, description: @review.description, rating: @review.rating }
    end


    private

    def review_params
        params.require(:review).permit(:description, :rating, :dog_id)
    end

    def find_dog
        byebug
        @dog ||= Dog.find params[:id]
    end

    def find_review
        @review ||= Review.find params[:id]
    end

end
