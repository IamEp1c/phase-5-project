class CoffeesController < ApplicationController

    def index 
        coffees = Coffee.order_by_price
        render json: coffees, status: :ok
    end
    

end
