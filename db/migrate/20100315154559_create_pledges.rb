class CreatePledges < ActiveRecord::Migration
  def self.up
    create_table :pledges do |t|
      t.column "name", :string, :limit => 200
      t.column "email", :string, :limit => 200
      t.column "state", :string, :limit => 2
      t.column "amount", :float
      t.timestamps
    end
  end

  def self.down
    drop_table :pledges
  end
end
