$(document).ready(function () {

	var randomNumber = '',
		numGuesses = 0,
		isItDecimal,
		userJustWon = false;



	/*showIntro(); */

	/* -- Start the game -- */
	$("#gretschQuestion").show();
	$("#gretschAnswer").hide();

	$("#fenderQuestion").hide();
	$("#fenderAnswer").hide();

	$("#gibsonQuestion").hide();
	$("#gibsonAnswer").hide();

	$("#kramerQuestion").hide();
	$("#kramerAnswer").hide();

	$("#prsQuestion").hide();
	$("#prsAnswer").hide();

	event.preventDefault();





	/*--- Display information modal box ---*/
  	$(".intro").click(function () {
  		$("#intro").fadeIn(1000);
  	});

  	$("#gretschQuestionButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").show();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();

		$("#prsQuestion").hide();
		$("#prsAnswer").hide();



  	});

  	 $("#gretschAnswerButton").click(function () {

  	 	$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();
		$("#fenderQuestion").show();
		$("#fenderAnswer").hide();
		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();
		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();
		$("#prsQuestion").hide();
		$("#prsAnswer").hide();
		event.preventDefault();

  	});

  	 $("#fenderQuestionButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").show();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();

		$("#prsQuestion").hide();
		$("#prsAnswer").hide();
  	});

  	$("#fenderAnswerButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").show();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();

		$("#prsQuestion").hide();
		$("#prsAnswer").hide();
  	});

   	$("#gibsonQuestionButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").show();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();

		$("#prsQuestion").hide();
		$("#prsAnswer").hide();
  	});

  	$("#gibsonAnswerButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").show();
		$("#kramerAnswer").hide();

		$("#prsQuestion").hide();
		$("#prsAnswer").hide();
  	});

    $("#kramerQuestionButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").show();

		$("#prsQuestion").hide();
		$("#prsAnswer").hide();
  	});

  	$("#kramerAnswerButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();

		$("#prsQuestion").show();
		$("#prsAnswer").hide();
  	});

    $("#prsQuestionButton").click(function () {
		$("#gretschQuestion").hide();
		$("#gretschAnswer").hide();

		$("#fenderQuestion").hide();
		$("#fenderAnswer").hide();

		$("#gibsonQuestion").hide();
		$("#gibsonAnswer").hide();

		$("#kramerQuestion").hide();
		$("#kramerAnswer").hide();

		$("#prsQuestion").hide();
		$("#prsAnswer").show();
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function () {
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- User makes a guess ---*/
	$("#guessButton").click(function (event) {
		event.preventDefault();
		console.log('Inside #guessButton - userJustWon is '+ userJustWon);
		if(userJustWon === false){
			console.log('Inside #guessButton-if - userJustWon is '+ userJustWon);
			inputString = $('#userGuess').val();
			isItDecimal = inputString.indexOf('.');
			theGuess = parseInt(inputString);
			$('form')[0].reset();
			validateNumber(isItDecimal, theGuess);
			if(inputIsValid === true){
				isTheGuessRight();
			}
			inputIsValid = false;
		} else{
			$("#feedback").text("Click '+New Game' to play again");
			document.getElementById("feedback").style.backgroundColor ="#000000";
		}
	});

	/*--- User wants a new game. ---*/
	$('.new').click(resetGame);

	/*--- FUNCTIONS ---*/
  	function resetGame() {
  		/*--- Reset the variables --*/

		numGuesses = 0;
		inputString;

		/*--- Reset the DOM ---*/
		$('#count').text(numGuesses);
		$("#guessList").find("li").remove();
		$("#feedback").text("Make Your Guess!");



	};

  	

  	function showIntro(){
  		$("#intro").fadeIn(1000);
  	}



  	
});


