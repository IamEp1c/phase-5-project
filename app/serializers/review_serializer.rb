class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :coffee_id
end
