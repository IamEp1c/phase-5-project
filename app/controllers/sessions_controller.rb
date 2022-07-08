class SessionsController < ApplicationController
  
  def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  def update 
    session[:cart] = (params[:cart])
  end

  def showCart 
    cart = session[:cart]
    render json: {cart: cart}
  end
end
