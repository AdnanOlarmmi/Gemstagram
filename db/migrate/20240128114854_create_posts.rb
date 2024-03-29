class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.text :caption
      t.float :longitude
      t.float :latitude
      t.references :user, null: false, foreign_key: true
      t.boolean :allow_comments
      t.boolean :show_likes_counter

      t.timestamps
    end
  end
end
