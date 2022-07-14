class Coffee < ApplicationRecord
    has_many :orders
    has_many :reviews
    has_many :users, through: :orders
    has_many :reviewers, through: :reviews, source: :user_id

    validates :rating, presence: true
    
    def self.highest_review
        self.reviews.order(:rating).last
    end

    def self.order_by_price
        self.order(price: :DESC)
    end



end
