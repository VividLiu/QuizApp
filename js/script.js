$(document).ready(function(){
	$("#qform").submit(function(e){
		e.preventDefault();
		console.log("submitted");

		var ans = $("input:radio[name='answer']:checked").val();
		console.log(ans);

	});

})

var questionList = [{
		q: "How many oscars did the Titanic movie got?
Eleven",
		a: ["7", "9", "11", "13"]
	},
	{
		q: "What is the name of the prison in the film The Rock?",
		a: ["Alcatraz", "b", "c", "d"]
	},
	{
		q: "What is the name of the little dragon in the animated movie Mulan?",
		a: ["Mushu", "b", "c", "d"]
	},
	{
		q: "What is the name of the bald commander of the Enterprise in Star Trek?",
		a: ["Captain Picard", "b", "c", "d"]
	},
	{
		q: "What is the name of Steven Spielberg s black-and-white-film about the second world war?",
		a: ["Schindler s List", "b", "c", "d"]
	}];

function showNextQuestion(){
	$("p.head").text();
}