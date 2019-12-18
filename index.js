var express = require('express'); 
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT); 
gpio.setup(8, gpio.DIR_OUT);
gpio.setup(11, gpio.DIR_OUT);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
app.get('/', function(req, res){ 
  res.render('index',{status:"Press Button"});
});


//led 7 
app.post('/led/on7', function(req, res){
allOff();
gpio.write(7, true, function(err) {

        if (err) throw err;
        console.log('Written True to pin 7');
console.log(path.join(__dirname, 'public'));
return res.render('index', {status: "Led is On"});
    });
});

app.post('/led/off7', function(req, res){
gpio.write(7, false, function(err) {

        if (err) throw err;
        console.log('Written False to pin 7');
console.log(path.join(__dirname, 'public'));
return res.render('index',{status: "Led is Off"}); 
    }); 
});
//end of led7

//led 8
app.post('/led/on8', function(req, res){
allOff();
gpio.write(8, true, function(err) {

        if (err) throw err;
        console.log('Written True to pin 8');
console.log(path.join(__dirname, 'public'));
return res.render('index', {status: "Led is On"});
    });
});

app.post('/led/off8', function(req, res){
gpio.write(8, false, function(err) {

        if (err) throw err;
        console.log('Written False to pin 8'); 
console.log(path.join(__dirname, 'public'));
return res.render('index',{status: "Led is Off"}); 
    });
}); 

function allOff(){
	gpio.write(7, false, function(err) {

	        if (err) throw err;
	        console.log('Written False to pin 7');
	     
	});

	gpio.write(8, false, function(err) {

	        if (err) throw err;
	        console.log('Written False to pin 8');
	   
	});

	gpio.write(11, false, function(err) {

	        if (err) throw err;
	        console.log('Written False to pin 11');
	    
	});
}


//end of led8

//led 11
app.post('/led/on11', function(req, res){
allOff();
gpio.write(11, true, function(err) { 

        if (err) throw err;
        console.log('Written True to pin 11');
console.log(path.join(__dirname, 'public'));
return res.render('index', {status: "Led is On"});
    });
});

app.post('/led/off11', function(req, res){
gpio.write(11, false, function(err) {

        if (err) throw err;
        console.log('Written False to pin 11');
console.log(path.join(__dirname, 'public'));
return res.render('index',{status: "Led is Off"}); 
    });
});
//end of led11

app.get('/led/allOff', function(req, res){
allOff();
});


app.listen(8080, function () {
  console.log('Server Started on Port: 8080!')
});