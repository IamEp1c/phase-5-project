class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :description
end
