class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :user_id, :coffee_id
end
