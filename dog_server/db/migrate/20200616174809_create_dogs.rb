class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.string :sex
      t.integer :age
      t.boolean :fixed
      t.text :bio

      t.timestamps
    end
  end
end
