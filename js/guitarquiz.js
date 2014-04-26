$(document).ready(function () {

	var	userJustWon = false,
	questionNumber,
  numRightAnswers = 3,
  quizUnits = new Array(),
  markerNumber,
  questionHTML,
  answerHTML,
  currentUnit,
  currentQuestion = 0,
  theAnswerIs,



	QuestionAnswer = function (questionText, answerText, rightAnswer, playerJPG, guitarJPG) {
			this.questionText = questionText;
			this.answerText = answerText;
			this.rightAnswer = rightAnswer;
			this.playerJPG = playerJPG;
			this.guitarJPG = guitarJPG;
		}, 
    qPart1 = '<div class="question">     <img id="PlayerImage" src="images/',
    /* playerImage is inserted here */
    qPart2 = '.jpg" alt="Player Image"/> <div id="numPicks"> <p id="numPicksText" style="font-size:24px;">',
    /* numRightAnswers is inserted here */
    qPart3 =  ' Correct Answers!</p> <br/> <img src="images/pick-',
    /* numPicksImage is inserted here */
    qPart4 = '.jpg"  style=" margin-right:35px;" alt="picks"/> </div> <br/><br/> <p id="copyQuestion" style="padding:50px; font-size:18px;"><br>',
   /* questionText is inserted here */
    qPart5 = '</p>',

    aPart1 = '<div id="answerCanBeSwappedOut"><img src="images/',
    aPart2 = '.jpg" style="position:center" alt="Pic of Guitar"/> <div id="numPicks"> <div id="numPicks">  <p id="numPicksText" class="quizText">',
    aPart3 = ' Correct Answers!</p> <br/>  <img src="images/pick-',
    aPart4 = '.jpg" style="margin-right:35px;" id="numPicksImage" style="" alt="picks"/>  </div> <br/><br/><br/><br/></div><p style="padding:50px" class="quizText">',
    aPart5 = '</p></div>';
 
	
		

	/*<-- Game starts here -->*/

  

	hideAll();

	resetGame();

  loadQuestion(questionNumber);



  

	/*--- Display information modal box ---*/
  $('.intro').click(function () {
  		$('#intro').fadeIn(1000);
  });



  $('.quizAnswer').click(function(){
      theAnswerIs = this.id; 
      checkAnswer();
      loadAnswer();
  });

  $('.nextQuestionButton').click(function(){
//      $('#nextQuestionButton').click(function(){
    questionNumber ++;
//    loadQuestion(questionNumber);
    var a = questionNumber + 1;
    currentUnit = '#question' + questionNumber; 
    console.log('In nextquestionbutton + 1 is '+ a);
    console.log('In nextquestionbutton quizUnits.length is ' + quizUnits.length)
  /*  if (questionNumber <= quizUnits.length) {
      console.log('inside if - questionNumber < quizUnits.length');
       $('#answer').slideUp(800, function(){
          $(currentUnit).slideDown(800);
          $('#answerCanBeSwappedOut').remove();
         })
    }
    else{
        console.log('inside else - questionNumber < quizUnits.length');
        playCliffsOfDover();
        $('#answer').slideUp(800, function(){
          $('#summary').slideDown(800);
          $('#answerCanBeSwappedOut').remove();
          });
      } */
       if (questionNumber === quizUnits.length) {
        console.log('inside if - questionNumber < quizUnits.length');
        playCliffsOfDover();
        $('#answer').slideUp(800, function(){
          $('#summary').slideDown(800);
          $('#answerCanBeSwappedOut').remove();
          });

    }
    else{
      console.log('inside else - questionNumber < quizUnits.length');
      loadQuestion(questionNumber);
       $('#answer').slideUp(800, function(){
          $(currentUnit).slideDown(800);
          $('#answerCanBeSwappedOut').remove();
         })


  /*      console.log('inside else - questionNumber < quizUnits.length');
        playCliffsOfDover();
        $('#answer').slideUp(800, function(){
          $('#summary').slideDown(800);
          $('#answerCanBeSwappedOut').remove();
          }); */
      }

    });
         
  

  $('.new').click(function(){
      questionNumber = 0;
      numRightAnswers = 0;
      $('.question').remove();
      $('#answerCanBeSwappedOut').remove();
      hideAll();
      $("#intro").fadeIn(1000);

      loadQuestion(questionNumber);
      $('#question0').show();
    });

	 /*--- FUNCTIONS ---*/


  	


  	/*--- Hide information modal box ---*/
  	$("#introClose").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- User makes a guess ---*/

	/*--- User wants a new game. ---*/
  	$('.new').click(function(){
      questionNumber = 0;
      numRightAnswers = 0;
      $('.question').remove();
      $('#answerCanBeSwappedOut').remove();
      hideAll();
      $("#intro").fadeIn(1000);
      loadQuestion(questionNumber);
      $('#question0').show();
    });

    $('#letsSeeHowYouDidButton').click(function(){

      alert('Click on Let see how you did!');
    });

    function resetGame (){
      questionNumber = 0;

      numRightAnswers = 0;

      loadArray();
  		$("#intro").fadeIn(1000, function(){

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
      $('#summary').hide();
    //  $('#holdingPlace').hide();

  		$("#answer").hide();
      $("#lastAnswer").hide();
    };

    function loadQuestion(){
      currentQuestion = quizUnits[questionNumber];
      markerNumber = '#marker' + questionNumber;
      questionHTML = 
        qPart1 +
        currentQuestion.playerJPG +
        qPart2 +
        numRightAnswers + 
        qPart3 +
        numRightAnswers +
        qPart4 + 
        currentQuestion.questionText +
        qPart5;
      $(markerNumber).after(questionHTML); 
    };

    function loadAnswer(){
      answerHTML =  aPart1 + 
      currentQuestion.guitarJPG + 
      aPart2 +
      numRightAnswers +
      aPart3 +
      numRightAnswers + 
      aPart4 +
      currentQuestion.answerText;

      currentUnit = '#question' + questionNumber;
      $(currentUnit).slideUp(800, function(){
          if(questionNumber+1 <= quizUnits.length){
             $('#answer').slideDown(800, function(){
              $(currentUnit).hide();
              $('#marker5').after(answerHTML);
            });
          }
          else{
            $('#lastAnswer').slideDown(800, function(){
              $(currentUnit).hide();
              console.log(answerHTML);
              $('#marker6').after(answerHTML);
            });
          }
          });

  

    };

    function loadArray(){
      /*-- If the question were loaded in a CMS this would be the place where we would load questions into the array --*/
      quizUnits[0] = new QuestionAnswer(
        'Inspired by Chet Atkins, this guitar saw a sales spike after The Beatles appearance on the Ed Sullivan Show.',
        'The Gretsch Musical Instrument Company built the first "Country Gentleman" guitar for Chet Atkins in 1957. When George Harrison played it on the Ed Sullivan Show, sales spiked by 25% in one week.',
        'gretsch',
        'geoharrison',
        'gretsch-guitar');


      /*-- Next question --*/
      quizUnits[1] = new QuestionAnswer(
        'Perhaps the most famous electric guitar of the rock and roll era, the Stratocaster - or Strat - was the the choice of Jimmy Hendrix and living legends Eric Clapton, Jeff Beck, and John Mayer. It was designed by a man who never learned to play the guitar. <br/><br/>What was his last name?',
        'Leo Fender started the Fender Musical Instrument Company in the depths of the Great Depression. His first guitar, the Broadcaster later became the Telecaster which is still a country music standard and played by artists such as Bruce Springsteen and Brad Paisley. Leo also manufactured the first electric bass guitar.',
        'fender',
        'claptonplaying',
        'fender-strat-hardtail');

      /*-- Next question --*/
      quizUnits[2] = new QuestionAnswer(
        'Innovative guitarist Les Paul designed the guitar that bears his name. He and his partner Mary Ford, were pioneers in the use of magnetic tape for multi-track recording. The Les Paul shot to stardom in the hands Jimmy Page and is still found on rock stages the world over. <br/><br/>What company manufactured it?',
        'In 1902, Orville Gibson started the Gibson Guitar-Mandolin Mfg Co. Ltd. in Kalamazoo MI. Over the years Gibson made everything from mandolins to aircraft parts during WWII. The Les Paul was probably their most commercially successful guitar. Gibson Mandolins are prized today for their beauty and tone.',
        'gibson',
        'pageplaying',
        'les-paul-classic');

      quizUnits[3] = new QuestionAnswer(
        'Eddie Van Halen rocked the music industry in the early 80&#146s with his astounding guitar technique. He could not have done it without the innovation of the EVH guitar. A locking "nut" made it possible to use the "whammy bar" to bend notes like no one had done before. Oh, he had great hair too.<br/><br/> Who manufactured his guitar?',
        'The Kramer Guitar Company was founded in the late 1970s by Dennis Berardi, Gary Kramer and Phillip J. Petillo Ph.D., Master Luthier-Engineer to manufacture aluminum-necked guitars. Based in New Jersey, they produced guitars used by heavy metal and shred guitar bands in the 80s.<br/> <br/> The guitar solo in Michael Jackson&#146s "Beat It" was played by Eddie VanHalen.',
        'kramer',
        'evhplaying',
        'kramer-guitar');

      quizUnits[4] = new QuestionAnswer(
        'Almost single-handedly, Carlos Santana brought this guitar company to the fore. It&#146s design was unique with 24 frets rather that the standard 22 frets found on Fender and Gibson guitars. The addition of 2 frets changed the harmonics of the instrument allowing Carlos and many others to sing with their guitars. <br/><br/> Who manufactured his guitar?',
        'Paul Reed Smith(PRS) was a Maryland based guitar player who pioneered the use of CNC machines to produce electric guitars of the highest quality. PRS now produces approximately 700 guitars a month from their factory in Stevensville, MD. <br/>Not bad for a kid who started making guitars in college.',
        'prs',
        'carlos',
        'santana-PRS');
    };

    function showIntro(){
    		$("#intro").fadeIn(1000);
    };

  	function clearIntro(){
    		$('#intro').fadeOut(1000);
    };
    function checkAnswer(){
      var checkTheAnswer = quizUnits[questionNumber];
      if(theAnswerIs===checkTheAnswer.rightAnswer){
        numRightAnswers++;
        switch(questionNumber){
          case 0:
            playDriveMyCar();
            break;
          case 1:
            playLayla();
            break;
          case 2:
            playCommunicationBreakdown();
            break;
          case 3:
            playBeatIt();
            break;
          case 4:
            playSantana();
            break;
          }
        }
        else{
            playHayseed();
        }
      };
    //};

    function playDriveMyCar() {
      $('#sound-drivemycar')[0].volume = 0.5;
      $('#sound-drivemycar')[0].load();
      $('#sound-drivemycar')[0].play();
    };
    function playLayla() {
      $('#sound-layla')[0].volume = 0.5;
      $('#sound-layla')[0].load();
      $('#sound-layla')[0].play();
    };
    function playCommunicationBreakdown() {
      $('#sound-communicationbreakdown')[0].volume = 0.5;
      $('#sound-communicationbreakdown')[0].load();
      $('#sound-communicationbreakdown')[0].play();
    };
    function playBeatIt() {
      $('#sound-beatit')[0].volume = 0.5;
      $('#sound-beatit')[0].load();
      $('#sound-beatit')[0].play();
    };
    function playSantana() {
      $('#sound-santana')[0].volume = 0.5;
      $('#sound-santana')[0].load();
      $('#sound-santana')[0].play();
    };
    function playHayseed() {
      $('#sound-hayseed')[0].volume = 0.5;
      $('#sound-hayseed')[0].load();
      $('#sound-hayseed')[0].play();
    };
    function playCliffsOfDover() {
      $('#sound-cliffsofdover')[0].volume = 0.5;
      $('#sound-cliffsofdover')[0].load();
      $('#sound-cliffsofdover')[0].play();
    };
    //}

	event.preventDefault();  	
});