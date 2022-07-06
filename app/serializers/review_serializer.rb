class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :coffee_id
end
