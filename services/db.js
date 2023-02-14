//import mongoose

const mongoose = require('mongoose')


//2 define connection string

mongoose.connect('mongodb://localhost:27017/BooksCollection', () => {
    console.log('connected MongodDB');

})

//3model creation

const Book = mongoose.model('Book', {
    id: Number,
    author: String,
    country: String,
    image: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number,
    img: [],
    des: String,
    price: Number



})

const Mbook = mongoose.model('Mbook', {
    id: Number,
    author: String,
    image: String,
    title: String,
    category: String
})


const Combo = mongoose.model('Combo', {
    id: Number,
    price: Number,
    image: String,
    category: String

})

const User = mongoose.model('User',
    {
        //schema 
        uname: String,
        email: String,
        pswd: String

    })


const Wishlist = mongoose.model('Wishlist', {
    id: Number,
    author: String,
    // country:String,
    pages: Number,
    image: String,
    title: String,
    price: Number,




}
)


// buyers 

const Buy = mongoose.model('Buy', {
    id: Number,
    bookname:String,
    image:String,
    email: String,
    buyername:String,
    pincode: Number,
    phone: Number,
    address: String,
    username: String,
})
//4export

module.exports = {
    Book,
    User,
    Mbook,
    Combo,
    Wishlist,
    Buy

}