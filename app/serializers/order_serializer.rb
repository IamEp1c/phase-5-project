class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :coffee_id
end
