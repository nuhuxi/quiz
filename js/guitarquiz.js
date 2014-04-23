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

	/*--- Display information modal box ---*/
  	$(".intro").click(function () {
  		$("#intro").fadeIn(1000);
  	});

  	$('.quizAnswer').click(function(){
  		console.log("Quiz answer clicked");
  		loadAnswer();
  		$('#question').slideUp(800, function(){
  			$('#question').remove();
  			$('#answer').slideDown(800);
  		});
  	});

  	$('.nextQuestion').click(function(){
  		console.log("Quiz answer clicked");
  		loadQuestion();
  		$('#answer').slideUp(800, function(){
  			$('#answer').remove();
  			$('#question').slideDown(800);
  		});
  	});

	/*--- FUNCTIONS ---*/


  	function loadQuestion(){

  		questionNumber = 0;
  		var pageLine1 = '<div id="question">';
            /*<-- pageLine2 will be changed -->*/
  		var pageLine2 = '<img id="playerImage" src="images/geoharrison.jpg" alt="George Harrison"/>';
  		var pageLine3 = '<div id="numPicks">'; 
            /*<-- pageLine4 will be changed -->*/ 		
  		var pageLine4 = '<p id="numPicksText" style="font-size:24px;">5 Correct Answers!</p> <br/>';
            /*<-- pageLine5 will be changed -->*/
  		var pageLine5 = '<img id="numPicksImage" src="images/pick-five.jpg"  style=" margin-right:35px;" alt="picks"/>';
  		var pageLine6 = '</div>';
  		var pageLine7 = '<br/><br/>';
  		var pageLine8 = '<p id="copyQuestion" style="padding:50px; font-size:36px;">';
            /*<-- pageLine9 will be changed -->*/
  		var pageLine9 = '<br>Inspired by Chet Atkins, this guitar saw a sales spike after The Beatles appearance on the Ed Sullivan Show';
            /*<-- pageLine10 will be changed -->*/
  		var pageLine10= ' in 1964. <br/><br/>Who manufactured it?</p>';
  		var pageLine11= '<br/><br/>';
  		var pageLine12= '<ul id="possibleAnswers">';
            /*<-- pageLines 13 thru pageLine17 will be changed -->*/
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

  		$('#marker').after(pageElement1);
  	};
	function loadAnswer(){
  		var pageLine21 = '<div id="answer" style="display:none;">';
      /*<-- pageLine 22 will be changed -->*/
  		var pageLine22 = '<img id="playerImage" src="images/gretsch-guitar.jpg" alt="George Harrison"/>';
  		var pageLine23 = '<div id="numPicks">';  
      /*<-- pageLine 24 will be changed -->*/		
  		var pageLine24 = '<p id="numPicksText" style="font-size:24px;">5 Correct Answers!</p> <br/>';
      /*<-- pageLine 25 will be changed -->*/
  		var pageLine25 = '<img id="numPicksImage" src="images/pick-five.jpg"  style=" margin-right:35px;" alt="picks"/>';
  		var pageLine26 = '</div>';
  		var pageLine27 = '<br/><br/>';
  		var pageLine28 = '<p id="copyQuestion" style="padding:50px; font-size:36px;">';
      /*<-- pageLines 29 will be changed -->*/
  		var pageLine29 = 'The Gretsch Musical Instrument Company built the first "Country Gentleman" guitar for Chet Atkins in 1957. ';
      /*<-- pageLine 210 will be changed -->*/
  		var pageLine210= ' When George Harrison played it on the Ed Sullivan Show seeing sales spike by 25% in one week.</p>';
  		var pageLine211= '<br/><br/>';
		  var pageLine212= '<img src="images/nextQuestionButton.png" class="nextQuestion" alt="nextQuestionButton"/>';
  		var pageLine213= '</div>';

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
  							pageLine212 +
                pageLine213;


  		$('#marker').after(pageElement2); 
  	};

  	/*--- Hide information modal box ---*/
  	$("#introClose").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- User makes a guess ---*/

	/*--- User wants a new game. ---*/
  	$('.new').click(function(){
      resetGame();
    });

    function resetGame (){
  		$("#intro").fadeIn(1000, function(){
  		  numGuesses = 0;
        loadQuestion();
      });
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


