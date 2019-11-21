let express = require("express");

var router = express.Router();

var Burger = require('../models/burger')
var path= require("path")

router.get("/", function (req,res){
    Burger.all(function(data) {
      var hbsObject = {
        burgers: data
      }
      res.render('index', hbsObject);
    })
    // res.sendFile(path.join(__dirname, "../public/test.html"))
})

router.post("/api/burger", function(req, res) {
    console.log("hit",req.body)
    Burger.create( req.body.burgerName, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  module.exports=router