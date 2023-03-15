const express =require('express')
const app=express();
const path=require('path');
const mainRouter=require('./routes/index')
const PORT=process.env.PORT||3000;

app.set('view engine','ejs');

//console.log(app.get('view engine'))
//console.log(app.get('views'))

app.use(express.static('public'));

app.use('/en',mainRouter)

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
});