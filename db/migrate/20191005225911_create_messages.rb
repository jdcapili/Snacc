class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.references :messageable, polymorphic: true, index: true
      
      t.timestamps
    end
  end
end
