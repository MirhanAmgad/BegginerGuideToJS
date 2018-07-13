/*
function sayhello()
{
	var response = prompt("what is your name?");
	alert ("Hello, "+ response +"!");
}
sayhello(); */

/*
function saygreating(greating)
{
	var response = prompt("waht is your name?");
	alert(greating +", "+response+ "!");
}
saygreating("Good Morning");
*/

/*
function saygreating(greating)
{
	var response = prompt("waht is your name?");
	alert(greating +", "+response+ "!");
}
saygreating("Have a good day");
*/

/*
function add(a,b)
{
	return a+b;
}
console.log (add(20,30));
console.log (add(120,310));
*/

/*
function multiply(a,b)
{
	return a*b;
}
console.log (multiply(20,30));
console.log (multiply(120,310));
*/

/*
var sisters = ['Mirhan', 'Haidy', 'Aiethel'];
console.log (sisters[2]);
*/

/*
var sisters = ['Mirhan', 'Haidy', 'Aiethel'];
sisters.push('sara');
console.log (sisters);
*/

/*
var sisters = ['Mirhan', 'Haidy', 'Aiethel'];
sisters.pop();
console.log (sisters);
*/

/*
var sisters = ['Mirhan', 'Haidy', 'Aiethel'];
sisters.forEach
				 (function(sisters)
					{
						alert(sisters);
					}
				);
*/
/* not working correct it displayes the three names four times
var sisters = ['Mirhan', 'Haidy', 'Aiethel'];
sisters.forEach ( movies => alert(sisters) );
*/

/*
var sisters = ['Mirhan', 'Haidy', 'Aiethel'];
for (var sisters of sisters)
{
	console.log(sisters);
}
*/

/*
var movie =
{
	title:'Wonder Woman' ,
	time:'2pm'
};

alert ( movie.title );
*/

/*
var movie =
{
	title:'Wonder Woman' ,
	time:'2pm'
};

movie.status ='unavaliable';
console.log (movie);
*/


var movies = 
[
{
	title: 'Brave Heart',
	time:'1pm',
	status:'avalibale'
},
{
	title: '18 again',
	time:'2pm',
	status:'unavalible'
},
{
	title: 'Home alone',
	time:'3pm',
	status:'avalibale'
},
{
	title: 'The conjuring',
	time:'4pm',
	status:' '
},
{
	title: 'dead pool',
	time:'3pm',
	status:'5pm'
}
];

for (var movies of movies)
{
	if(movies.status==='avalibale')
		{
			console.log("The movie "+ movies.title + " plays at " + movies.time);
		}
	else
		{
			console.log("The movie "+ movies.title + " is unavalible");
		}
}
