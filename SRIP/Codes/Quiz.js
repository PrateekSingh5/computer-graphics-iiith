function submitQuiz() 
{
	// get each answer 
		function answerScore (qName) {
			var radioNumber = document.getElementsByName(qName);

			for (var i = 0, length = radioNumber.length; i < length; i++) {
   				if (radioNumber[i].checked) 
   				{
					var answerValue = Number(radioNumber[i].value);
				}
			}
			if (isNaN(answerValue))
			 {
				answerValue = 0;
			}
			return answerValue;
		}

	// calcualte score with answerScore function
		var calculateScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')+ answerScore('q5')+ answerScore('q6')+ answerScore('q7')+ answerScore('q8')+ answerScore('q9')+ answerScore('q10'));
		
	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			return ("The correct answer for question&nbsp" + qNumber+":-" + "<strong>" + (document.getElementById(correctStringNo).htmlFor) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
		}
		if (answerScore('q6') === 0) {
			document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
		}
		if (answerScore('q7') === 0) {
			document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
		}
		if (answerScore('q8') === 0) {
			document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
		}
		if (answerScore('q9') === 0) {
			document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
		}
		if (answerScore('q10') === 0) {
			document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
		}
		


	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calculateScore +"/" + questionCounter;
	// for perfect score
		if (calculateScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>";
		}
		document.getElementById('userScore').innerHTML = showScore;
	}

