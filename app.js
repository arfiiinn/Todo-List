//jshint esversion:6  
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food","Cook Food","Eat Food"];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function (req, res){

// Displays Date on the home route 
let today = new Date();

let options = { 
    weekday: "long",
    day: "numeric",
    month: "long"
};

let day = today.toLocaleDateString("en-US", options);
// Displaying result from server to website.
res.render('list',{kindOfDay:day, newListItems:items});

});

app.post("/", function(req,res){
    let item = req.body.newItem;
    //Whenever new item is added it is added to array items and then it is displayed in app.get()
    items.push(item);
    // We redirecting the items to home route
    res.redirect("/");
})

//Starting server at 3000
app.listen(3000,function(){
    console.log("Server up and running at port 3000!");
});