const db = require('./db')

// get all the books from db

const getBooks = () => {
    return db.Book.find()
        .then(
            (result) => {
                if (result) {
                    return {
                        status: true,
                        statusCode: 200,
                        books: result
                    }
                }
                else {
                    return {
                        status: false,
                        statusCode: 404,
                        message: 'No Product Found'
                    }
                }
            }
        )
}



const getMbooks = () => {
    return db.Mbook.find()
        .then(
            (result) => {
                if (result) {
                    return {
                        status: true,
                        statusCode: 200,
                        books: result
                    }
                }
                else {
                    return {
                        status: false,
                        statusCode: 404,
                        message: 'No Product Found'
                    }
                }
            }
        )
}


const getCombos = () => {
    return db.Combo.find()
        .then(
            (result) => {
                if (result) {
                    return {
                        status: true,
                        statusCode: 200,
                        books: result
                    }
                }
                else {
                    return {
                        status: false,
                        statusCode: 404,
                        message: 'No Product Found'
                    }
                }
            }
        )
}


const getView = (id) => {
    return db.Book.findOne({ id })
        .then(
            (result) => {
                if (result) {
                    return {
                        status: true,
                        statuscode: 200,
                        books: result
                    }
                }
                else {
                    return {
                        satus: false,
                        statuscode: 404,
                        message: 'No Product Found'
                    }
                }
            }
        )
}



const getView1 = (id) => {
    return db.Combo.findOne({ id })
        .then(
            (result) => {
                if (result) {
                    return {
                        status: true,
                        statuscode: 200,
                        books: result
                    }
                }
                else {
                    return {
                        satus: false,
                        statuscode: 404,
                        message: 'No Product Found'
                    }
                }
            }
        )
}
const register = (uname, email, pswd) => {
    return db.User.findOne({ uname })
        .then(user => {
            if (user) {
                return {
                    status: 'false',
                    statusCode: 400,
                    message: 'user already registered'
                }
            }
            else {
                const newUser = new db.User({
                    uname: uname,
                    email: email,
                    pswd: pswd
                })
                newUser.save();
                return {
                    status: 'true',
                    statusCode: 200,
                    message: 'Registered Successfully'
                }
            }
        })



}

const login = (email, pswd) => {
    return db.User.findOne({ email, pswd })

        .then(user => {
            console.log(user);
            if (user) {
                // curreuser=user.username
                // currentemail=email

                return {
                    status: 'true',
                    statusCode: 200,
                    message: 'Login Successful',
                    user: user

                }

            }
            else {
                return {
                    status: 'false',
                    statusCode: 400,
                    message: 'invalid User details'
                }
            }
        })
}




const addtowishlist = (id, author, image, pages, title, price) => {
    //data added to mongodb -- create a model in db.js


    return db.Wishlist.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: false,
                    statusCode: 401,
                    message: "product already exist"
                }
            }
            else {
                const newProduct = new db.Wishlist({ id, author, image, pages, title, price })
                newProduct.save()//to save data in mongodb
                return {
                    status: true,
                    statusCode: 200,
                    message: "product added to wishlist"
                }
            }
        }
    )
}

const getwishlist = () => {
    return db.Wishlist.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    books: result,
                    // message:"product removed"

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'Your Wishlist is empty'
                }
            }
        }
    )

}

//delete item fron wishlist

const deletewish = (title) => {
    return db.Wishlist.deleteOne({title}).then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    books: result,
                    message: "product removed  successfully"

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'Your Wishlist is empty'
                }
            }
        }
    )
}


const buynow = (id, bookname, image, username, email, buyername, pincode, phone, address) => {

    return db.Buy.find().then(
        (result) => {
            if (result) {

                const buyedbook = new db.Buy({
                    id: id,
                    bookname: bookname,
                    image: image,
                    email: email,
                    buyername: buyername,
                    pincode: pincode,
                    phone: phone,
                    address: address,
                    username: username
                    
                })
                buyedbook.save()

             
                return {
                    status: true,
                    statusCode: 200,
                    books: result,
                    message: "product orderd succesfully"

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'error'
                }
            }
        }
    )

}

 const getorder = () => {
    return db.Buy.find().then(
        (result) => {
            if(result){
                return{
                    status: true,
                    statusCode: 200,
                    orders: result,
                }



            }else{
                return{
                    status: false,
                    statusCode: 400,
                    message:"No orders"
                }
            }
        }
    )

}


module.exports = {
    getBooks,
    getView,
    register,
    login,
    getMbooks,
    getCombos,
    getView1,
    getwishlist,
    addtowishlist,
    deletewish,
    buynow,
    getorder
}