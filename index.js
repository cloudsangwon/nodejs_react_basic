const express =require('express');
const app =express();
const port =3000;

const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://sangwon:abcd1234@nodejs-react-basic.rgr1x.mongodb.net/nodejs_mongodb?retryWrites=true&w=majority', {
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('MongoDB Connected ..'))
.catch(err=>console.log(err));
app.get('/',(req,res)=> res.send("Hello sangwon"));

app.listen(port,()=>console.log(`Example app listening on port ${port}`));
// mongodb+srv://sangwon:<password>@nodejs-react-basic.rgr1x.mongodb.net/<dbname>?retryWrites=true&w=majority
