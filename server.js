const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Serves the index.html file as a simple webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

function addition(num1, num2){
    return num1 + num2;
}

function subtraction(num1, num2){
    return num1 - num2;
}

function division(num1, num2){
    return num1 / num2;
}

function multiplication(num1, num2){
    return num1 * num2;
}

function exponentiation(num1, num2){
    return num1 ** num2;
}

function modulus(num1, num2){
    return num1 % num2; 
}

app.get('/add/:num1/:num2', (req, res) => {

    try{

        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);

        if (req.params.num1 === undefined){
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: first number in calculation missing!');
            throw new Error('Missing first value');
        }
        if (req.params.num2 === undefined){            
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: second number in calculation missing!');
            throw new Error('Missing second value');
        }
        if (isNaN(num1)){
            res.status(400).send('Error: input one is not a number!');
            throw new Error('Input one is not a number!');
        }
        if (isNaN(num2)){
            res.status(400).send('Error: input two is not a number!');
            throw new Error('Input two is not a number!');
        }
        //perform addition
        var sum = addition(num1, num2);
        //return value to client
        res.status(200).send(num1  + " + "  +  num2 + " = " + sum);//


    }
    catch(error){
        res.status(500).send(`Unknwon server error. Error: ${error}`);
    }
})

app.get('/subtract/:num1/:num2', (req, res) => {

    try{

        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);

        if (req.params.num1 === undefined){
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: first number in calculation missing!');
            throw new Error('Missing first value');
        }
        if (req.params.num2 === undefined){            
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: second number in calculation missing!');
            throw new Error('Missing second value');
        }
        if (isNaN(num1)){
            res.status(400).send('Error: input one is not a number!');
            throw new Error('Input one is not a number!');
        }
        if (isNaN(num2)){
            res.status(400).send('Error: input two is not a number!');
            throw new Error('Input two is not a number!');
        }
        //perform subtraction
        var minus = subtraction(num1, num2);
        //return value to client
        res.status(200).send(num1 + " + " + num2 + " = " + minus);


    }
    catch(error){
        res.status(500).send(`Unknwon server error. Error: ${error}`);
    }
})

app.get('/divide/:num1/:num2', (req, res) => {

    try{

        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);

        if (req.params.num1 === undefined){
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: first number in calculation missing!');
            throw new Error('Missing first value');
        }
        if (req.params.num2 === undefined){            
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: second number in calculation missing!');
            throw new Error('Missing second value');
        }
        if (isNaN(num1)){
            res.status(400).send('Error: input one is not a number!');
            throw new Error('Input one is not a number!');
        }
        if (isNaN(num2)){
            res.status(400).send('Error: input two is not a number!');
            throw new Error('Input two is not a number!');
        }
        //perform division
        var divide = division(num1, num2);
        //return value to client
        res.status(200).send(num1 + " / " + num2 + " = " + divide);


    }
    catch(error){
        res.status(500).send(`Unknwon server error. Error: ${error}`);
    }
})

app.get('/multiply/:num1/:num2', (req, res) => {

    try{

        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);

        if (req.params.num1 === undefined){
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: first number in calculation missing!');
            throw new Error('Missing first value');
        }
        if (req.params.num2 === undefined){            
            //HTTP status 400, Bad Request sent as error
            res.status(400).send('Error: second number in calculation missing!');
            throw new Error('Missing second value');
        }
        if (isNaN(num1)){
            res.status(400).send('Error: input one is not a number!');
            throw new Error('Input one is not a number!');
        }
        if (isNaN(num2)){
            res.status(400).send('Error: input two is not a number!');
            throw new Error('Input two is not a number!');
        }
        //perform multiplication
        var multiply = multiplication(num1, num2);
        //return value to client
        res.status(200).send(num1 + " x " + num2 + " = " + multiply);


    }
    catch(error){
        res.status(500).send(`Unknwon server error. Error: ${error}`);
    }
})

//Starts the Express Server listening on port 8080
app.listen(PORT, () => {
    console.log(`7.1P Kubernetes Task Listening On Port http://${HOST}:${PORT}`);    
});
