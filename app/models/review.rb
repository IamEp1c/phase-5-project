class Review < ApplicationRecord
    belongs_to :user
    belongs_to :coffee


    validates :content, length: { maximum: 500 }
end
