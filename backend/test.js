const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Sample").then(()=>{
    console.log("Connected Successfully");
}).catch((err)=>{
    console.log(err);
})

const student = new mongoose.Schema({
    name: String,
    workout: Boolean,
    height:Number
})

const Student = new mongoose.model("Student", student);

const adder = async () => {

    await Student.create({
        name: "Shek",
        workout: true,
        height: 6
    })

}

adder();