const express = require('express');

// make a server instance 
const app = express();

// Enables request.body to be raw JSON data 
app.use(express.json());

app.get("/", (request, response) => {
	response.json({
		message:"Hello world"
	});
});

 
module.exports = {
	app
}