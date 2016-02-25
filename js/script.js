$(document).ready(function(){
	//submit answer
	$("#qform").submit(function(e){
		e.preventDefault();

		var ans = $("input:radio[name='answer']:checked").val();
		console.log(ans);

		//show right answer in alert box
		if(ans == answerList[qIndex]){
			score++;
			alert("Correct!");
		}else{
			alert("Correct answer: " + answerList[qIndex]);
		}

		//update current question index
		qIndex++;
		if(qIndex < questionList.length){
			$(".cnt span").text(qIndex+1);
		}

		//go to next question
		showNextQuestion(qIndex);
	});

	//start a new game
	$("#restart").click(function(e){
		window.location.reload();
	});

})

var qIndex = 0; //index of current question
var score = 0; //how many questions does the user answer correctly

var questionList = [
	{
		q: "How many oscars did the Titanic movie got?",
		a: ["7", "9", "11", "13"]
	},
	{
		q: "What is the name of the prison in the film The Rock?",
		a: [ "a","Alcatraz", "c", "d"]
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
	}
];

var answerList = ["11", "Alcatraz", "Mushu", "Captain Picard", "Schindler s List"];


function showNextQuestion(index){
	//end of game
	if(index == questionList.length){
		//update score
		$("#score").text(score);

		$("i:nth-child(-n+" + score + ")").addClass("icon-star");

		//
		var contentElem = $(".end_message").clone();

		$(".content").html("");
		$(".content").html(contentElem.find("div"));
		return ;
	}

	//update input value
	$("p.a1 input").val(questionList[index].a[0]);
	$("p.a2 input").val(questionList[index].a[1]);
	$("p.a3 input").val(questionList[index].a[2]);
	$("p.a4 input").val(questionList[index].a[3]);

	//update question and answer options
	$("p.head").text((index+1) + "." + questionList[index].q);

	$("p.a1 span").text(questionList[index].a[0]);
	$("p.a2 span").text(questionList[index].a[1]);
	$("p.a3 span").text(questionList[index].a[2]);
	$("p.a4 span").text(questionList[index].a[3]);

	//uncheck checked radio button
	$("input:radio[name='answer']:checked").prop("checked", false);

}