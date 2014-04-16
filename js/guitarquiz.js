$(document).ready(function () {

	var randomNumber = '',
		numGuesses = 0,
		isItDecimal,
		userJustWon = false,
		questionNumber = 1
		/*theQuiz = {
			question: 0,
			answer 		}*/
		;
	/*Initialize the page*/

	hideAll();
	showIntro();
	resetGame();
	firstQuestion();




	

	/*--- Display information modal box ---*/
  	$(".intro").click(function () {
  		$("#intro").fadeIn(1000);
  	});

  	$("#gretschQuestionButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").show();
  	});

  	 $("#gretschAnswerButton").click(function () {
		$("#gretschAnswer").hide();
		$("#fenderQuestion").show();
  	});

  	 $("#fenderQuestionButton").click(function () {
		$("#fenderQuestion").hide();
		$("#fenderAnswer").show();
  	});

  	$("#fenderAnswerButton").click(function () {
		$("#fenderAnswer").hide();
		$("#gibsonQuestion").show();
  	});

   	$("#gibsonQuestionButton").click(function () {
		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").show();
  	});

  	$("#gibsonAnswerButton").click(function () {
		$("#gibsonAnswer").hide();
		$("#kramerQuestion").show();
  	});

    $("#kramerQuestionButton").click(function () {
		$("#kramerQuestion").hide();
		$("#kramerAnswer").show();
  	});

  	$("#kramerAnswerButton").click(function () {
		$("#kramerAnswer").hide();
		$("#prsQuestion").show();
  	});

    $("#prsQuestionButton").click(function () {
		$("#prsQuestion").hide();
		$("#prsAnswer").show();
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
		$("#intro").fadeIn(1000);
		numGuesses = 0;
	};


function hideAll() {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();

		$("#prsQuestion").hide();
		$("#prsAnswer").hide();
  	};

  	function showIntro(){
  		$("#intro").fadeIn(1000);
  	};

  	function clearIntro(){
  		$('#intro').fadeOut(1000, linear,firstQuestion());
  	};
  	function firstQuestion() {
		$("#gretschQuestion").show();
		$("#gretschAnswer").hide();
  	};
	event.preventDefault();  	
});


