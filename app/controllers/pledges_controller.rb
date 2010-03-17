class PledgesController < ApplicationController
  def create
    name = params[:name]
    email = params[:email].sub(/[#]/, '.')
    state = params[:state]
    amount = params[:amount]

    pledge = Pledge.new(
      :name => name,
      :email => email,
      :state => state,
      :amount => amount
    )

    
    
    respond_to do |format|
      if pledge.save
        format.json { render :json => "'count':'#{Pledge.count}','total':'#{Pledge.sum(:amount)}'" }
      else
        format.json  { render :json => "error", :status => :unprocessable_entity }
      end
    end
  end

end
