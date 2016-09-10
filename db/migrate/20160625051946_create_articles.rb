class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.references :user
      t.string :title, null: false
      t.string :body
      
      t.timestamps null: false
    end
  end
end