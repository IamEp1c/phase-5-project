class SessionsController < ApplicationController
  #custom controller <3 :) 
  
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
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
