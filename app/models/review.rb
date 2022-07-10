class Review < ApplicationRecord
    belongs_to :user
    belongs_to :coffee


    validates :content, length: { maximum: 500 }
    # validates :rating, length: { maximum: 5 }
end
