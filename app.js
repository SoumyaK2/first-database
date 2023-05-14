const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/humanDB");

const peopleSchema= new mongoose.Schema({
    name: String,
    age: Number
});

const People= mongoose.model("People",peopleSchema);

const people= new People({
    name: "John",
    age: 32
});

people.save();

const people2= new People({
    name: "Ronit",
    age: 16
});

const people3= new People({
    name: "Lora",
    age: 33
});

const people4= new People({
    name: "Pakhi",
    age: 18
});


People.insertMany([people2,people3,people4]);





People.find().then((data) => {
    data.forEach(function(element){
        console.log(element.name);
    })
   
   });


People.updateOne({_id: "644fe2df64314e0f884c8f6c"},{name: "Rakhi"}).then(()=>{console.log("Succesfully Updated");}).catch((err)=>{console.log(err);});

People.deleteOne({name: "Rakhi"}).then(()=>{console.log("Succesfully Deleted");}).catch((err)=>{console.log(err);});





