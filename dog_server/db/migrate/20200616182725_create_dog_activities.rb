class CreateDogActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :dog_activities do |t|
      t.references :dog, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true
      t.timestamps
    end
  end
end
