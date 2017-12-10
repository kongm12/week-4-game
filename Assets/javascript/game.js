var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCounter = 0;
var loseCounter = 0;
var diamond = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var ruby = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var emerald = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var sapphire = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function shuffleCrystalValues(){
	diamond = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	ruby= Math.floor(Math.random()*(12 - 1 + 1) + 1);
	emerald = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	sapphire = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userTotalScore == computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	}
}


$(#diamond).on('click', function(){
	userTotalScore += diamond;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$(#ruby).on('click', function(){
	userTotalScore += ruby;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$(#emerald).on('click', function(){
	userTotalScore += emerald;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$(#sapphire).on('click', function(){
	userTotalScore += sapphire;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});
