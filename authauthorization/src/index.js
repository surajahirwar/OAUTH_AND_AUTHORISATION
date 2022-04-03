const express=require("express")

const app=express()
app.use(express.json())
const { body } = require("express-validator");
const postController=require("./controllers/post.controller")
const usersController=require("./controllers/users.controller")
const productController=require("./controllers/product.controller")
const passport=require("./configs/google-oauth")
const {register,login,generateToken}=require("./controllers/auth.controller")

app.use("/posts",postController)
app.use("/users",usersController)
app.use("/products",productController)
app.post("/register",body("name")
.trim()
.not()
.isEmpty()
.withMessage("First Name cannot be empty")
.isLength({ min: 4 })
.withMessage("First Name must be at least 4 characters"),body("email")
.not()
.isEmpty()
.withMessage("email cannot be empty")
.isEmail(),body("password").not().isEmpty().isLength({min:4}),register)

app.post("/login",body("email").not().isEmpty()
.withMessage("email cannot be empty")
.isEmail(),body("password").not()
.isEmpty()
.withMessage("password cannot be empty")
.isLength({ min: 4 })
.withMessage("password must be at least 4 characters"),login)

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        
        failureRedirect: '/login',
        session:false
}),function(req,res){
    var token = generateToken(req.user)
    res.status(200).send({user:req.user,token})
});

module.exports=app


// "dependencies": {
//     "bcrypt": "^5.0.1",
//     "dotenv": "^16.0.0",
//     "express": "^4.17.3",
//     "express-validator": "^6.14.0",
//     "jsonwebtoken": "^8.5.1",
//     "mongoose": "^6.2.8",
//     "passport": "^0.5.2",
//     "passport-google-oauth2": "^0.2.0",
//     "redis": "^3.1.2",
//     "uuid