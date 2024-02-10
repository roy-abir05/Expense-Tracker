const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ExpenseTracker").then(()=>{
    console.log("Connected Successfully");
}).catch((err)=>{
    console.log(err);
})

const income = new mongoose.Schema({
	title: String,
	amount: Number,
	date: String
});

const Income = new mongoose.model("Income", income);
const Expense = new mongoose.model("Expense", income);


const express = require('express');
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
const { request } = require("http");

const PORT = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/Incomes", cors(), async (req, res) => {

	const allData = await Income.find({});
	res.json(allData);

});

app.post("/Incomes", async (req, res) => {

	const data = {
		title: req.body.title,
		amount: req.body.amount,
		date: req.body.date
	}

	await Income.insertMany([data])

	res.send([data]);
});

app.post("/IncomesDelete", async (req, res) => {


	const data = {
		title: req.body.title,
		amount: req.body.amount,
		date: req.body.date
	}

	await Income.deleteMany({title: data.title, amount: data.amount, date: data.date})

	res.send([data]);
});

app.get("/Expenses", cors(), async (req, res) => {

	const allData = await Expense.find({});
	res.json(allData);
});

app.post("/Expenses", async (req, res) => {

	const data = {
		title: req.body.title,
		amount: req.body.amount,
		date: req.body.date
	}

	await Expense.insertMany([data])

	res.send([data]);
});

app.post("/ExpensesDelete", async (req, res) => {

	const data = {
		title: req.body.title,
		amount: req.body.amount,
		date: req.body.date
	}

	await Expense.deleteMany({title: data.title, amount: data.amount, date: data.date})

	res.send([data]);
});

app.listen(PORT, () => {
	console.log(`Server is Woring on port: ${PORT}`);
});
