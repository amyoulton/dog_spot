class User < ApplicationRecord
    has_secure_password

    has_many :dogs, dependent: :destroy
    has_many :reviews, dependent: :destroy

    has_one_attached :avatar
end
