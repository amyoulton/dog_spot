class Trait < ApplicationRecord
    has_many :dog_traits, dependent: :destroy
    has_many :dogs, through: :dog_traits 
    before_save :downcase_name

    validates :name, uniqueness: {
        case_sensitive: false 
    }



    private 

    def downcase_name 
        self.name&.downcase!
    end

end
