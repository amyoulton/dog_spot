class Dog < ApplicationRecord
    has_many :reviews, dependent: :destroy

    has_many :dog_traits, dependent: :destroy
    has_many :traits, through: :dog_traits

    has_many :dog_activities, dependent: :destroy
    has_many :activities, through: :dog_activities

    belongs_to :user

    has_one_attached :profile

    # validate :acceptable_image

    # private

    # def acceptable_image
    #     return unless main_image.attached?
    #     acceptable_types = ["image/jpeg", "image/png", "image/jpg"]
    #     unless acceptable_types.include?(main_image.content_type)
    #     errors.add(:main_image, "must be a JPEG, JPG, or PNG")
    #     end
    # end
end
