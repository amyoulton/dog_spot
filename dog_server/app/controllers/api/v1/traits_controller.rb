class Api::V1::TraitsController < Api::ApplicationController
    before_action :find_dog

    def create 
        
        @trait = Trait.new(params.require(:trait).permit(:id, :name))
        @trait = @trait.valid? ? @trait : Trait.find_by(name: params.require(:trait).permit(:name)[:name])
        @trait.dogs << @dog
        if @trait.save
            render json: { id: @trait.id, name: @trait.name }
        else
            render(
                json: { errors: @trait.errors },
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
