const router=require('express').Router();
const apiKeyMiddleware=require('../middlewares/apiKey')
//router.use(apiKeyMiddleware);
router.get("/",(req,res)=>{
    res.render('index',{
        title:'My home page'
    }); 
})
router.get('/about',(req,res)=>{

    res.render('about',{
        title:'My about page'
    })

})
router.get('/downloads',(req,res)=>{

     res.download(path.resolve(__dirname)+'/about.html');
 
 })
// router.get('/api/products',apiKeyMiddleware,(req,res)=>{

//    // res.download(path.resolve(__dirname)+'/about.html');
//    res.json([
//     {
//         id:'123',
//         name:"chrome",
//     },{
//         id:'124',
//         name:"firebox"
//     }
//    ])

// })

module.exports=router;