 //OBJECT: Magic 8-Ball

    //PROPERTY: Answers ["Maybe", "It's possible...", "Ask Again Later", "Definitely"]

	//FUNCTION Ask question
    //INPUT Question, Magic 8 Ball, Magic 8 Ball Answers
    //Shake 8 ball
    //OUTPUT Review answer in window

$(document).ready(function(){

    var magic8Ball = {}; //Object
    
    magic8Ball.listOfAnswers = ["Maybe", "It's possible...", "Ask Again Later", "Definitely"]; //Property(ies)

    $("#answer").hide();
    $("#8ballAnswer").hide();
        
    magic8Ball.askQuestion = function(question)//Method (FUNCTION inside of OBJECT)
    {
        $("#answer").fadeIn(4000);
        var randomNumber = Math.random();//create random number
        var randomNumberForAnswer = randomNumber * 	this.listOfAnswers.length;//create random number within length of array
        var randomIndex = Math.floor(randomNumberForAnswer);//round random number down
        var randomAnswer = this.listOfAnswers[randomIndex];//use rounded number to select answer
        
        $("#answer").text( randomAnswer );
        
        console.log(question);
        
        console.log(randomAnswer);   
        
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    };
        
    var onClick = function() 
    {
        $("#answer").hide();

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        
        setTimeout (
            function() {
                var question = prompt("Ask a yes or no question!");

                magic8Ball.askQuestion(question);

                $("#8ball").effect("shake");
            }, 500);

    };
        $("#questionButton").click( onClick );//Run question FUNCTION

	});