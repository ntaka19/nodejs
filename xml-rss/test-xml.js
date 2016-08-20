var parseString = require('xml2js').parseString;
//test data 
var xml = "<fruits shop = 'AAA'>" + 
				"<item price ='140'>Banana</item>" + 
				"<item price = '200'>Apple</item>" +
				"</fruits>";

//parse xml
parseString(xml,function(err,result){
				console.log(JSON.stringify(result));

});


