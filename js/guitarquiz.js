$(document).ready(function () {

	var	userJustWon = false,
		questionNumber = 0,

		quizUnits = new Array(),

		currentQuestionAnswer;

	/*	function QuestionAnswer(question, answer, rightAnswer, answer1,answer2,answer3,answer4,answer5) {
			this.question = question;
			this.answer = answer;
			this.rightAnswer = rightAnswer;
			this.answer1= answer1;
			this.answer2= answer2;
			this.answer3= answer3;
			this.answer4= answer4;
			this.answer5= answer5;
		}
	*/
		

	/*<-- Game starts here -->*/

	hideAll();

	resetGame();

	loadQuestion();

	startGame();
	

	/*--- Display information modal box ---*/
  	$(".intro").click(function () {
  		$("#intro").fadeIn(1000);
  	});

  	$('.quizAnswer').click(function(){
  		
  		$('#answer').slideDown(800, function(){
  			$('#question').remove();
  			loadAnswer();
  		});
  		$('#answer').slideUp(800);
  	});

  	$('#nextQuestionButton').click(function(){
  		$('#answer').slideUp(800, loadQuestion());
  		$('#question').slideDown(800);
  	});

	/*--- FUNCTIONS ---*/


  	function loadQuestion(){

  		questionNumber = 0;
  		var pageLine1 = '<div id="question">';
  		var pageLine2 = '<img id="playerImage" src="images/geoharrison.jpg" alt="George Harrison"/>';
  		var pageLine3 = '<div id="numPicks">';  		
  		var pageLine4 = '<p id="numPicksText" style="font-size:24px;">5 Correct Answers!</p> <br/>';
  		var pageLine5 = '<img id="numPicksImage" src="images/pick-five.jpg"  style=" margin-right:35px;" alt="picks"/>';
  		var pageLine6 = '</div>';
  		var pageLine7 = '<br/><br/>';
  		var pageLine8 = '<p id="copyQuestion" style="padding:50px; font-size:36px;">';
  		var pageLine9 = 'Inspired by Chet Atkins, this guitar saw a sales spike after The Beatles appearance on the Ed Sullivan Show';
  		var pageLine10= ' in 1964. <br/><br/>Who manufactured it?</p>';
  		var pageLine11= '<br/><br/>';
  		var pageLine12= '<ul id="possibleAnswers">';
  		var pageLine13= '<img src="images/logo-fender.jpg" class="quizAnswer" id="answer1" alt="Gretsch logo"/>';
  		var pageLine14= '<img src="images/logo-gretsch.jpg" class="quizAnswer" id="answer2" alt="Gretsch logo"/>';
  		var pageLine15= '<img src="images/logo-gibson.jpg" class="quizAnswer" id="answer3" alt="Gretsch logo"/>';
  		var pageLine16= '<img src="images/logo-martin.jpg" class="quizAnswer" id="answer4"alt="Gretsch logo"/>';
  		var pageLine17= '<img src="images/logo-prs.jpg" class="quizAnswer" id="answer5" alt="Gretsch logo"/> <br/><br/>';
  		var pageLine18= '</ul>';
  		var pageLine19= '</div>';

  		var pageElement1 = 	pageLine1 +
  							pageLine2 +
  							pageLine3 +
  							pageLine4 +
  							pageLine5 +
  							pageLine6 +
  							pageLine7 +
  							pageLine8 +
  							pageLine9 +
  							pageLine10 +
  							pageLine11 +
  							pageLine12 +
  							pageLine13 +
  							pageLine14 +
  							pageLine15+
  							pageLine16+
  							pageLine17+
  							pageLine18+
  							pageLine19;
  		console.log(pageElement1);
  		$('#marker').after(pageElement1);
  	};
	function loadAnswer(){
  		var pageLine21 = '<div id="answer">';
  		var pageLine22 = '<img id="playerImage" src="images/gretsch-guitar.jpg" alt="George Harrison"/>';
  		var pageLine23 = '<div id="numPicks">';  		
  		var pageLine24 = '<p id="numPicksText" style="font-size:24px;">5 Correct Answers!</p> <br/>';
  		var pageLine25 = '<img id="numPicksImage" src="images/pick-five.jpg"  style=" margin-right:35px;" alt="picks"/>';
  		var pageLine26 = '</div>';
  		var pageLine27 = '<br/><br/>';
  		var pageLine28 = '<p id="copyQuestion" style="padding:50px; font-size:36px;">';
  		var pageLine29 = 'The Gretsch Musical Instrument Company built the first "Country Gentleman" guitar for Chet Atkins in 1957. ';
  		var pageLine210= ' When George Harrison played it on the Ed Sullivan Show seeing sales spike by 25% in one week.</p>';
  		var pageLine211= '<br/><br/>';
		var pageLine211= '<button id="fenderQuestionButton" class="nextPageButton">Answer</button>';
  		var pageLine212= '</div>';

  		var pageElement2 = 	pageLine21 +
  							pageLine22 +
  							pageLine23 +
  							pageLine24 +
  							pageLine25 +
  							pageLine26 +
  							pageLine27 +
  							pageLine28 +
  							pageLine29 +
  							pageLine210 +
  							pageLine211 +
  							pageLine212;

  		console.log(pageElement2);
  		$('#marker').after(pageElement1); 
  	};

  		/* <-- the variable pageElement is constructed from attributes n the array. The 'String' of the div is concatenated 
  			and then inserted into the dom. This is done for each question and answer pair. -->*/
	

/*			'<div>';
					<img id="playerImage" src="images/geoharrison.jpg" alt="George Harrison"/>';
			<div id="numPicks">
					<p id="numPicksText">3 Correct Answers!</p> <br/>
					<img id="numPicksImage" src="images/pick-one.jpg"  style=" margin-right:0px;" alt="picks"/>
				</div>
				<br/><br/>'

				<p id="copyQuestion" style="padding:50px">
				"Inspired by Chet Atkins, this guitar saw a sales spike after The Beatles appearance on the Ed Sullivan Show
				in 1964. <br/><br/>					Who manufactured it?

				</p>
				<br/><br/>		
				<ul id="possibleAnswers">			
					<img src="images/logo-fender.jpg" class="quizAnswer" id="answer1" alt="Gretsch logo"/>
					<img src="images/logo-gretsch.jpg" class="quizAnswer" id="answer2" alt="Gretsch logo"/>
					<img src="images/logo-gibson.jpg" class="quizAnswer" id="answer3" alt="Gretsch logo"/>
					<img src="images/logo-martin.jpg" class="quizAnswer" id="answer4"alt="Gretsch logo"/>
					<img src="images/logo-prs.jpg" class="quizAnswer" id="answer5" alt="Gretsch logo"/> <br/><br/>
				</ul>
			</div>';

		questionAnswer.question = "Inspired by Chet Atkins, this guitar saw a sales spike after The Beatles appearance on the Ed Sullivan Show in 1964. 
					Who manufactured it?";
	  	alert(pageElement);
*/


  		

/*	function selectPickJpg(a){
  		alert($('#numPicksImage'.src()))
  	};*/
  	/*--- Hide information modal box ---*/
  	$("#introClose").click(function () {
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- User makes a guess ---*/


	/*--- User wants a new game. ---*/
	$('.new').click(resetGame());
	function startGame(){
  		$('#question').show();
  	};
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
	event.preventDefault();  	
});


