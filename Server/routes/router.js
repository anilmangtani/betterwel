const express = require('express')
const route = express.Router();
const path = require('path');
let userSchema = require('../model/usermodel');
let blogSchema = require('../model/blogmodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination:(req,file, cb)=>{
//         cb(null, 'Images')
//     },
//     filename:(req,file,cb)=>{
//         console.log(file);
//         cb(null, Data.now() +path.extname(file.originalname))
//     }
// })

// const upload = multer({storage:storage})

route.get('/',(req,res)=>{
    res.send("")
})

//REGISTER ROUTE
route.post('/api/register', async (req,res)=>{

    if(!req.body){
        res.status(400).send({message:"content not be empty"});
        return;
    }
    console.log(req.body);
    try{
        let user = new userSchema({
            name: req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password: req.body.password
        });

        user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some Error Occured! try again"
            });
        });
        

    }catch(error){
        res.json({status:'error'});
    }
})

//LOGIN ROUTE
route.post('/api/login', async (req, res)=>{
    const user = await userSchema.findOne({
        email:req.body.email,
        password:req.body.password
    })

    if(user){
        const token = jwt.sign({
            name: user.name,
            email:user.email
        },
        'secret123')
        
        return res.json({status:'ok', token:token}).redirect('/') 
        
    }else{
       return res.send('<h1>error</h1>')
    }
})


route.put('/api/users/:id',(req,res)=>{
    
    const id = req.params.id;
    userSchema.findByIdAndUpdate(id,req.body, {useFindAndModify:false})
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Some Error Occured! try again"});
        })
})

route.delete('/api/users/:id',(req,res)=>{
    const id = req.params.id;

    userSchema.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:'can not delete user with '+id})
            }else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(404).send({message:err.message || "Some Error Occured!"})
        })
})

/************************************BLOGS ROUTES******************************************/
route.post('/api/blogs', async (req, res)=>{
    if(!req.body){
        res.status(400).send({message:"content not be empty"});
        return;
    }
    console.log(req.body);

    try{
        let blog = new blogSchema({
            title: req.body.title,
            image:req.body.image,
            description:req.body.description,
            username: req.body.username
        });
        // console.log(blog);
        blog
        .save(blog)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some Error Occured! try again"
            });
        });
        

    }catch(error){
        res.json({status:'error'});

    }
})


route.get('/api/blogs',(req,res)=>{
    blogSchema.find()
        .then(foundblogs => res.json(foundblogs))
})


route.post('/uploads',(req,res)=>{


})

module.exports = route