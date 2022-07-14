class UserMailer < ApplicationMailer
    default from: ENV['GMAIL_USERNAME']

    def welcome_email 
        @user = params[:user]
        mail(to:@user.email, subject: "Welcome to Waqas's Cafe!")
    end
end
