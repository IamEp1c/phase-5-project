# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(username:"WaqasA", password:"password")
user2 = User.create(username:"Zdrake", password:"password")


puts "seeding coffees"
coffee1 = Coffee.create(
    name: "Cappuccino",
    price: 7,
    image: "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
    description: "A warm delicious cappuchino, to ease the burdens you are facing"

)

coffee2 = Coffee.create(
    name: "Mocha",
    price: 5,
    image: "https://www.spoonfulofflavor.com/wp-content/uploads/2021/11/mocha-latte-recipe.jpg",
    description: "a coffee & chocolatey sensation"

)

coffee3 = Coffee.create(
    name: "Espresso",
    price: 4,
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FYHTISENURHMTIYJF4TSJ25DJE.jpg",
    description: "highly cocentrated & smooth, let's get to work"
)

review1 = Review.create(content: "I always buy my coffee from this website, fast & Affordable!", rating: 5, user_id: 1, coffee_id: 1)


puts "seeding orders"

(1..5).each do 
    Order.create(user: User.all.sample, coffee: Coffee.all.sample)
end

puts "seeding finished!"