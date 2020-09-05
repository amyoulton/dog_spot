class ChangeDogAgeType < ActiveRecord::Migration[6.0]
  def change
    change_column :dogs, :age, :string
  end
end
