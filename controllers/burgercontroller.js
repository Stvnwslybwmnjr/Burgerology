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

// router.put("/api/burger/:id", function(req, res) {
//   console.log(req.params.id)
// })
router.put('/api/burgers/:id', function(req, res) {
      // Burger.update(req.params.id, function(result) {
      //   if (result.changedRows == 0) {
      //     // If no rows were changed, then the ID must not exist, so 404
      //     return res.status(404).end();
      //   } else {
      //     res.status(200).end();
      //   }
      // })
  var condition = 'id = ' + req.params.id;
console.log("ENGANGED B CONTROL")

console.log(req.params.id)
console.log(req.body.devoured)
  Burger.updateOne({ devoured: true }, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});

  module.exports=router