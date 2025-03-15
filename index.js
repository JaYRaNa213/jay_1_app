// console.log("Backend First Video ")


require('dotenv').config()
const express = require('express')
//  or 
// import express from "express"
const app = express()

const port = 4000

app.get('/',(req,res) => {
  res.send("Hello Jay ")
})

app.get('/twitter',(req,res) => {
  res.send("Twiiter is here")
})

app.get('/login',(req,res) => {
  res.send('<h1>Please login at web code </h1>')
})

app.get('/youtube',(req,res)=>{
  res.send("Hii i am here ")
})
app.listen(process.env.PORT,() =>{
  console.log(`Example app listening on port ${port}`)
})