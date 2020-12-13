const express =require('express');
const app =express();
const bodyParser = require('body-parser');
const port =3000;

const config =require('./config/key')

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// applicaion/json
app.use(bodyParser.json());


const { User } = require("./models/User");
const mongoose =require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('MongoDB Connected ..'))
.catch(err=>console.log(err));









app.get('/',(req,res)=> res.send("Hello sangwon hi"));


app.post('/register',(req,res) => {
    
    // 회원 가입할 떄 필요한 정보들을 client 에서 가져오면
    // 그것들을 DB에 넣어준다.
    const user = new User(req.body);
 //mongodb method -- save
    user.save((err,userInfo) => {
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })

})










app.listen(port,()=>console.log(`Example app listening on port ${port}`));
// mongodb+srv://sangwon:<password>@nodejs-react-basic.rgr1x.mongodb.net/<dbname>?retryWrites=true&w=majority
