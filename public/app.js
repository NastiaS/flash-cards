var app = angular.module('FlashCards', []);

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

app.factory("FlashCardsFactory", function($http){
     
   
    return {
        getFlashCards: function(category){
            var req = {
                method: 'GET',
                url: '/cards',
                params: { category: category }
                }

           return $http(req).then(function(response){
                return response.data;
            });
        }};
});

app.controller("MainController", function($scope, FlashCardsFactory){
    FlashCardsFactory.getFlashCards().then(function(FlashCards){
        //console.log("Got here")
        $scope.flashCards= FlashCards;
    });
    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];
    $scope.getCategoryCards= function(category){
        //console.log(FlashCardsFactory.getFlashCards(category));
        FlashCardsFactory.getFlashCards(category).then(function(flashCards){
            $scope.flashCards = flashCards;
            $scope.currentCategory = category;
            // console.log(category);
            // console.log($scope.currentCategory)
        });

    }

});


app.factory("ScoreFactory", function(){
    return {
        correct: 0,
        incorrect: 0
    };
});
app.controller("StatsController", function($scope, ScoreFactory){

    $scope.scores = ScoreFactory;
});