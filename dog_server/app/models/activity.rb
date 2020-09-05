class Activity < ApplicationRecord
    has_many :dog_activities, dependent: :destroy
    has_many :dogs, through: :dog_activities

    before_save :downcase_name

    validates :name, uniqueness: {
        case_sensitive: false 
    }

    private 

    def downcase_name 
        self.name&.downcase!
    end
end
