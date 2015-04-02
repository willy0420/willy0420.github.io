class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :name
      t.string :message

      t.timestamps null: false
    end
  end
end
