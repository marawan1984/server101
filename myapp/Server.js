const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
const port = 3000

const user = {
    username: 'John',
    password: 'john123'
}
const accountNumber = {
    accountNumber: 1234567890
}


let balance = 100;


app.post('/login', (req, res) => 
{
    const {username,password} = req.body;
    if(user && user.username === username && user.password === password){
    res.status(200).json(user);
}
    else{
        res.status(401).json({error: 'Invalid Credentials'})   
    }
})

app.post('/deposit',(req,res) =>{
    const amount = req.body.amount;
    balance = parseInt(balance) + parseInt(amount);
    res.status(200).json({ newBalance: balance });
    

}
);

app.post('/withdraw',(req,res) =>{
    const amount = req.body.amount;
    balance = parseInt(balance) - parseInt(amount);
    res.status(200).json({ newBalance: balance });
}
);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}
)

