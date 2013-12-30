var request = require('request');
var cheerio = require('cheerio');
request('http://pitchfork.com/reviews/albums/14122-congratulations/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    
    $ = cheerio.load(body);
    var score = $('.score').text();
    console.log(score) // Print the google web page.
  }
})
function sandwich(bread, meat)
{
  console.log(bread + meat + bread) ;
}
sandwich("Rye", "Pastrami") ;


var firsturl = 'http://pitchfork.com/reviews/albums/2/'

var reviewurls = []
function getscore (url, callback)
{
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		
		$ = cheerio.load(body);
		var score = $('.score').text();
		console.log(url +',     '+ score)
		callback ()
	  }
	})
}
request (firsturl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
	  $ = cheerio.load(body)
	  var urls = $('#main .object-grid a');
	  for (var i = 0; i < urls.length; i++)
	  {
	    //console.log (urls[i].attribs.href) ;
	    reviewurls.push (urls[i].attribs.href);
		getscore('http://pitchfork.com' + urls[i].attribs.href, function (){})
		
		
	  }
	  //console.log (reviewurls.length)
	  
  }
})


