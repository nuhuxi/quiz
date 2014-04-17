$(document).ready(function () {

	var randomNumber = '',
		numGuesses = 0,
		isItDecimal,
		userJustWon = false,
		questionNumber = 1;

	var quizUnit = function (question, answer, rightAnswer, nextQuestionButton) {
		this.question = question;
		this.answer = answer;
		this.rightAnswer = rightAnswer;
		this.nextQuestionButton = nextQuestionButton;
	}
	 var question1  = new quizUnit('#gretschQuestion', '#gretschAnswer', '#gretschAnswerButton', '#gretschAnswerButton');
	 var question2  = new quizUnit('#fenderQuestion', '#fenderAnswer', '#fenderAnswerButton', '#fenderAnswerButton');
	 var question3  = new quizUnit('#gibsonQuestion', '#gibsonAnswer', '#gibsonAnswerButton', '#gibsonAnswerButton');
	 var question4  = new quizUnit('#kramerQuestion', '#kramerAnswer', '#kramerAnswerButton', '#kramerAnswerButton');
	 var question5  = new quizUnit('#prsQuestion', '#prsAnswer', '#prsAnswerButton', '#prsAnswerButton');

	hideAll();
	showIntro();
	resetGame();

	firstQuestion();
	

	/*--- Display information modal box ---*/
  	$(".intro").click(function () {
  		$("#intro").fadeIn(1000);
  	});

  	$('#gretschQuestionButton').click(function () {
		$(question1.question).hide();
		$(question1.answer).show();
  	});

  	 $(question1.nextQuestionButton).click(function () {
  	 	console.log("clicked on gretsch answer button");
		$(question1.answer).hide();
		$(question2.question).show();
  	});

  	 $("#fenderQuestionButton").click(function () {
		$(question2.question).hide();
		$(question2.answer).show();
  	});

  	$(question2.nextQuestionButton).click(function () {
		$(question2.answer).hide();
		$(question3.question).show();
  	});

   	$("#gibsonQuestionButton").click(function () {
		$(question3.question).hide();
		$(question3.answer).show();
  	});

  	$(question3.nextQuestionButton).click(function () {
		$(question3.answer).hide();
		$(question4.question).show();
  	});

    $("#kramerQuestionButton").click(function () {
		$(question4.question).hide();
		$(question4.answer).show();
  	});

  	$(question4.nextQuestionButton).click(function () {
		$(question4.answer).hide();
		$(question5.question).show();
  	});

    $("#prsQuestionButton").click(function () {
		$(question5.question).hide();
		$(question5.answer).show();
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
  		$('#intro').fadeOut(1000);
  	};
  	function firstQuestion() {
		$(question1.question).show();
  	};
	event.preventDefault();  	
});


