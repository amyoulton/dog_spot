class Api::V1::ActivitiesController < Api::ApplicationController
    before_action :find_dog

    def create 
        
        @activity = Activity.new(params.require(:activity).permit(:id, :name))
        @activity = @activity.valid? ? @activity : Activity.find_by(name: params.require(:activity).permit(:name)[:name])
        @activity.dogs << @dog
        if @activity.save
            render json: { id: @activity.id, name: @activity.name }
        else
            render(
                json: { errors: @activity.errors },
                status: 422
            )
        end
    end

    def update
        @trait.update params.require(:trait).permit(:id, :name)
        render json: { id: @dogs.id }
    end

    private

    def find_dog       
         @dog ||= Dog.find params[:dog_id]
    end
end
