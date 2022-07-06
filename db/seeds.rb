# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(username:"WaqasA", password:"password")
user2 = User.create(username:"Zdrake", password:"password")

coffee1 = Coffee.create(
    name: "Death Wish",
    price: 20,
    image: "https://www.google.com/aclk?sa=l&ai=DChcSEwjohdq6x-L4AhXDyZQJHSRRAp4YABABGgJ5bQ&sig=AOD64_3EYY6bpni9jjBdb_Q0HKu4g13vtQ&adurl&ctype=5&ved=2ahUKEwjr7866x-L4AhWlsHIEHVYMDrIQvhd6BAgBEG0",
    description: "world's most potent coffee, drink with caution"

)

coffee2 = Coffee.create(
    name: "Kicking Horse Coffee",
    price: 10,
    image: "https://images.heb.com/is/image/HEBGrocery/003066067",
    description: "a complete balance of flavor"

)

coffee3 = Coffee.create(
    name: "Starbucks veranda blend",
    price: 22,
    image: "https://www.oppictures.com/SINGLEIMAGES/350/163117.JPG",
    description: "A crowd pleaser for all"
)

# coffee4 = Coffee.create(
#     name: "",
#     price: ,
#     image: ,
#     description:
# )
(1..5).each do 
    Order.create(user: User.all.sample, coffee: Coffee.all.sample)
end

puts "seeding finished!"