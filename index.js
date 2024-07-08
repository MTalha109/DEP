const connection = require('./connection')
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/employeex/:id' , (req,res)=>{
    connection.query('SELECT * FROM employeex WHERE id=?' [req.Talha.id], (err,rows)=>{
     if(err){
         console.log(err)
     }
     else{
         res.send(rows)
     }
 })
 })

 app.delete('/employeex/:id' , (req,res)=>{
    connection.query('DELETE * FROM employeex WHERE id=?' [req.Talha.id], (err,rows)=>{
     if(err){
         console.log(err)
     }
     else{
         res.send(rows)
     }
 })
 })

 app.post('/employeex/:id' , (req,res)=>{
    var emp = req.body
    var empData = [emp.name, emp.salary]
    connection.query('INSERT INTO employeex(name, salary) values(?)',[emp], (err,rows)=>{
     if(err){
         console.log(err)
     }
     else{
         res.send(rows)
     }
 })
 })

  app.put('/employeex/:id' , (req,res)=>{
    var emp = req.body
    var empData = [emp.name, emp.salary]
    connection.query('UPDATE employeex SET ? WHERE id- ' +emp.id,[empData], (err,rows)=>{
     if(err){
         console.log(err)
     }
     else{
        if(rows.affectedRows==0){
        }
        
        else{
                res.send(rows)
            
        }
        
     }
 })
 })

app.listen(3000,()=>console.log('Express server is running on port 3000'))