const express = require ('express')
const cors = require ('cors')
const app = express()
const mongoose = require ('mongoose')
const model = require ('./models/user')
const bcrypt = require('bcrypt');

const saltRounds = 10;

mongoose.connect("mongodb://127.0.0.1:27017/KUCHKUCH") 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/home')

app.post('/login',async (req,res)=>{
    let{UserName,password} = req.body;
    const user = await model.findOne({UserName})
    if(user){
        if(bcrypt.compareSync(password,user.password)){
            res.json("Hello "+ UserName);
        }
        else{
            res.json("Wrong Password")
        }
    }
    else{
        res.json("User Doesn't Exist")
    }
})
app.post("/register",async (req,res)=>{
    let{UserName,email,password} = req.body;
    const user = await model.findOne({email});
    if(user){
        res.json("Email already Registered")
    }
    else{
        const NewUser = await model.create(
            { UserName,
                email,
                password:bcrypt.hashSync(password, saltRounds)
            })
        res.json(NewUser)
    }
    

    // const NewUser = await model.create({UserName,email,password})
    // res.json(NewUser)
})

app.listen(4000,()=>{
    console.log("Server Running")
})