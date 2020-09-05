class DogSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :name,
    :breed,
    :sex,
    :age,
    :fixed,
    :bio,
    :size,
    :created_at,
    :updated_at
  )

  belongs_to :user
  has_many :traits
  has_many :activities
  has_many :reviews

  class ActivitySerializer < ActiveModel::Serializer
    attributes(
      :id,
      :name,
      :created_at
    )
  
    belongs_to :dog, key: :dogs
  end

  class TraitSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :name,
      :created_at
    )
  
    belongs_to :dog, key: :dogs
  end

  class ReviewSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :description,
      :rating,
      :created_at
    )
  
    belongs_to :user
  end

end
