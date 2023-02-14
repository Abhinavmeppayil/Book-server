//importing express

const express = require('express')

//import cors -- to connect frontend and backend

const cors = require('cors')

const dataService = require('./services/dataService')


//creating error
const app = express()


//to parse JSON

app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on port 3000');
})



app.use(cors({
    origin:'http://localhost:4200'
}))

// api to get all products 
app.get('/all-books',(req,res)=>{
    dataService.getBooks()
    .then(result=>{
        res.status(result.statusCode).json(result)

    })
    
})


app.get('/m-books',(req,res)=>{
    dataService.getMbooks()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.get('/combos',(req,res)=>{
    dataService.getCombos()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//image to view on view component
app.post('/getview',(req,res)=>{
    dataService.getView(req.body.id)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})

app.post('/getview1',(req,res)=>{
    dataService.getView1(req.body.id)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    dataService.register(req.body.uname,req.body.email,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})

app.post('/log',(req,res)=>{
    console.log(req.body);
    dataService.login(req.body.email,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})



app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.author,req.body.image,req.body.pages,req.body.title,req.body.price).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.delete('/deletewish/:title',(req,res)=>{
    dataService.deletewish(req.params.title)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/buybook',(req,res)=>{
    dataService.buynow(req.body.id, req.body.bookname, req.body.image, req.body.username, req.body.email, req.body.buyername, req.body.pincode, req.body.phone, req.body.address)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getorder',(req,res)=>{
    dataService.getorder()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
