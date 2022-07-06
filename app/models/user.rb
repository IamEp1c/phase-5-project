class User < ApplicationRecord
    has_many :reviews
    has_many :orders
    has_many :coffees, through: :orders
    has_many :coffee_reviews, through: :reviews, source: :coffee_id
    # user1 when he clicks on add to bag for a certain coffee we want that coffee to go into the shopping cart
    # user2 when he logs in he does not see user's 1 coffee in the cart 
    validates :username, presence: true, uniqueness: true
    
    has_secure_password



end
