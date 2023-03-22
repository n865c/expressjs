const express =require('express')
const app=express();
const path=require('path');
const ErrorHandler = require('./errors/ErrorHandler');
const mainRouter=require('./routes/index')
const PORT=process.env.PORT||3000;
const productrouter=require('./routes/products');
//const apiKeyMiddleware=require('./middlewares/apiKey');
app.set('view engine','ejs');
//app.use(apiKeyMiddleware)

//console.log(app.get('view engine'))
//console.log(app.get('views'))

app.use(express.static('public'));
app.use(express.json());
//app.use(express.urlencoded({extended:false}));

app.use(productrouter);

app.use(mainRouter);

app.use((req,res,next)=>{
    return res.json({message:"All fields are required."});
});
app.use((err,req,res,next)=>{
    if(err instanceof ErrorHandler){
        res.status(err.status).json({
            error:{
                message:err.message,
                status:err.status
            }
        })

    }
    else{
        res.status(500).json({
            error:{
                message:err.message,
                status:err.status
            }
        })
    }
      console.log('Error:',err.message);
      res.json({message:err.message});
});
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
});