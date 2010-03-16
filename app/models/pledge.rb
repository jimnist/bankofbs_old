class Pledge < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :email
  validates_presence_of :state
  validates_presence_of :amount

  validates_numericality_of :amount,
    :only_integer => true
end
