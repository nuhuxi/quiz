$(document).ready(function () {

	var	userJustWon = false,
		questionNumber = 0,

		quizUnits = new Array(),

		currentQuestionAnswer,

		questionAnswer = function (question, answer, rightAnswer, answer1,answer2,answer3,answer4,answer5) {
			this.question = question;
			this.answer = answer;
			this.rightAnswer = rightAnswer;
			this.answer1= answer1;
			this.answer2= answer2;
			this.answer3= answer3;
			this.answer4= answer4;
			this.answer5= answer5;

		}

		var question  = new questionAnswer(
		 	'Question1', 
		 	'Answer1',
			'RightAnswer1',
			'firstbutton',
			'secondbutton',
			'thirdbutton',
			'fourthbutton',
			'fifthbutton'
		);

	hideAll();
	resetGame();
	startGame();
	

	/*--- Display information modal box ---*/
  	$(".intro").click(function () {
  		$("#intro").fadeIn(1000);
  	});


  	$('.quizAnswer').click(function(){

  		$('#question').slideUp();
  		$('#answer').slideDown();
  		$('#numPicks').remove();

  	});

  	$('#nextQuestionButton').click(function(){

  		$('#question').slideDown();
  		$('#numPicks').append();
  		$('#answer').slideUp();

  	});




  

  	/*--- Hide information modal box ---*/
  	$("#introClose").click(function () {
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- User makes a guess ---*/


	/*--- User wants a new game. ---*/
	$('.new').click(resetGame());

	/*--- FUNCTIONS ---*/

	function resetGame (){
		/*$("#intro").fadeIn(1000);*/
		numGuesses = 0;
	};


	function hideAll() {
		$("#question").hide();
		$("#answer").hide();

		
  	};


	function showIntro(){
  		$("#intro").fadeIn(1000);
  	};

	function clearIntro(){
  		$('#intro').fadeOut(1000);
  	};

	function startGame(){
  		$('#question').show();
  	};
/*	function selectPickJpg(a){
  		alert($('#numPicksImage'.src()))
  	};*/
	event.preventDefault();  	
});


