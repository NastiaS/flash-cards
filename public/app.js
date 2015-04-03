var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function($scope){
//console.log(FlashCardsFactory.getFlashCards());


$scope.answerQuestion = function(answer){
    $scope.answered=true;
    $scope.answeredCorrectly=answer;
}


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