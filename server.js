const express =require('express')
const app=express();
const path=require('path');
const mainRouter=require('./routes/index')
const PORT=process.env.PORT||3000;
//const apiKeyMiddleware=require('./middlewares/apiKey');
app.set('view engine','ejs');
//app.use(apiKeyMiddleware)

//console.log(app.get('view engine'))
//console.log(app.get('views'))

app.use(express.static('public'));

app.use(mainRouter)

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
});