$(document).ready(function(){
	$("#qform").submit(function(e){
		console.log("bk");

		e.preventDefault();
		console.log("submitted");
	});

	$("#ntBt").click(function(e){
		console.log("bk1");
		var option = $("input[name='answer']").val();
		console.log(option);
	})
})

function nextQuestion(){

}