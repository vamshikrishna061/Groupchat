const express = require('express');
const Router = express.Router();

Router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST" ><input id="username" type="text" name="username" ><button type="submit">Login</button></form>');
})

module.exports=Router;