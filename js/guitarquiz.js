$(document).ready(function () {

	var	userJustWon = false,
	questionNumber = 0,
  numRightAnswers = 1,
	quizUnits = new Array(),
  markerNumber,
  questionHTML,
  answerHTML,

	QuestionAnswer = function (questionText, answerText, rightAnswer, playerJPG, guitarJPG) {
			this.questionText = questionText;
			this.answerText = answerText;
			this.rightAnswer = rightAnswer;
			this.playerJPG = playerJPG;
			this.guitarJPG = guitarJPG;
		}, 
    qPart1 = '<div id="question">     <img id="PlayerImage" src="images/',
    /* playerImage is inserted here */
    qPart2 = '.jpg" alt="Player Image"/> <div id="numPicks"> <p id="numPicksText" style="font-size:24px;">',
    /* numRightAnswers is inserted here */
    qPart3 =  ' Correct Answers!</p> <br/> <img src="images/pick-',
    /* numPicksImage is inserted here */
    qPart4 = '.jpg"  style=" margin-right:35px;" alt="picks"/> </div> <br/><br/> <p id="copyQuestion" style="padding:50px; font-size:36px;"><br>',
   /* questionText is inserted here */
    qPart5 = '</p>',

    aPart1 = '<img src="images/',
    aPart2 = '.jpg" style="position:center" alt="Pic of Guitar"/>
          <div id="numPicks">
            <div id="numPicks" >
              <p id="numPicksText" class="quizText">',
    aPart3 = 'Correct Answers!</p> <br/>
              <img src="images/pick-',
    aPart4 = '.jpg" style="margin-right:35px;" id="numPicksImage" style="" alt="picks"/>
            </div>
          <br/><br/><br/><br/>
          </div>
          <p style="padding:50px" class="quizText">',
    aPart5= '';
 
	
		

	/*<-- Game starts here -->*/

	hideAll();

	resetGame();

  loadQuestion();

	/*--- Display information modal box ---*/
  	$(".intro").click(function () {
  		$("#intro").fadeIn(1000);
  	});

  	$('.quizAnswer').click(function(){
  		console.log("Quiz answer clicked");

  		$('#question0').slideUp(800, function(){

  		$('#answer').slideDown(800);
  		});
  	});

  	$('.nextQuestion').click(function(){
  		console.log("Next question clicked");

  		$('#answer').slideUp(800, function(){
  		$('#question0').slideDown(800);
      questionNumber ++;
  		});
  	});

	 /*--- FUNCTIONS ---*/


  	


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
      $("#question0").show();
      $("#answer").hide();
      }); 
  	};

    function hideAll() {
  		$("#question0").hide();
      $("#question1").hide();
      $("#question2").hide();
      $("#question3").hide();
      $("#question4").hide();

  		$("#answer").hide();
    };

    function loadQuestion(){
      question0 = new QuestionAnswer(
        'Inspired by Chet Atkins, this guitar saw a sales spike after The Beatles appearance on the Ed Sullivan Show.',
        'The Gretsch Musical Instrument Company built the first "Country Gentleman" guitar for Chet Atkins in 1957. When George Harrison played it on the Ed Sullivan Show seeing sales spike by 25% in one week.',
        '.gretsch',
        'geoharrison',
        'gretsch-guitar');

      console.log(question0.questionText);
      console.log(question0.answerText);
      console.log(question0.rightAnswer);
      console.log(question0.playerJPG);
      console.log(question0.guitarJPG);

      questionHTML = 
        qPart1 +
        question0.playerJPG +
        qPart2 +
        numRightAnswers + 
        qPart3 +
        numRightAnswers +
        qPart4 + 
        question0.questionText +
        qPart5;
      $('#marker0').after(questionHTML); 

    };

    function loadAnswer(){
        answerHTML =  aPart1 + 
          gretsch-guitar + 
          aPart2
          3 
          aPart3 +
          5 + 
          aPart4 +
          The Gretsch Musical Instrument Company built the first "Country Gentleman" guitar for Chet Atkins in 1957. When George Harrison played it on the Ed Sullivan Show seeing sales spike by 25% in one week.<br/><br/>
      $('#marker1').after(answerHTML); 

    };

    function showIntro(){
    		$("#intro").fadeIn(1000);
    };

  	function clearIntro(){
    		$('#intro').fadeOut(1000);
    };
	event.preventDefault();  	
});