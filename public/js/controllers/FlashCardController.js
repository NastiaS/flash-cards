app.controller('FlashCardController', function($scope, ScoreFactory){
//console.log(FlashCardsFactory.getFlashCards());

$scope.answered = false;
$scope.answeredCorrectly = null;

$scope.answerQuestion = function(answer){

    if($scope.answered) return;
    $scope.answered=true;
    $scope.answeredCorrectly=answer.correct;

    if(answer.correct === true){
        ScoreFactory.correct++;
    }
    else{ ScoreFactory.incorrect++}
    };

});