class Coffee < ApplicationRecord
    has_many :orders
    has_many :reviews
    has_many :users, through: :orders
    has_many :reviewers, through: :reviews, source: :user_id

    def highest_review
        self.reviews.order(:rating).last
    end
end
