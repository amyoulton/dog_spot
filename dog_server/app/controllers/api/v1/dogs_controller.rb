class Api::V1::DogsController < Api::ApplicationController
    before_action :find_dog, only: [:show, :edit, :update, :destroy]

    def index
        dogs = Dog.order(created_at: :desc)
        render json: dogs, each_serializer: DogIndexSerializer
    end

    def show
        
        if @dogs
            render(
                json: @dogs,
                include: [:user, {activities: [:dog]}, {traits: [:dog]}, {reviews: [:user]}] 
            )
        else 
            render(json: { error: 'Dog Not Found'})
        end
    end

    def create
        dog = Dog.new dog_params
        dog.user = current_user
        if dog.save
            render json: { id: dog.id }
        else
            render(
                json: { errors: dog.errors },
                status: 422 
            )
        end
    end

    def update
        @dogs.update dog_params
        render json: { id: @dogs.id }
    end

    def destroy
        @dogs.destroy 
        render(json: { status: 200 }, status: 200)
    end

    private

    def dog_params 
        params.require(:dog ).permit(:name, :breed, :sex, :age, :fixed, :bio, :size, :profile, images: [])
    end
    
    def find_dog 
        @dogs ||= Dog.find params[:id]
    end

end
