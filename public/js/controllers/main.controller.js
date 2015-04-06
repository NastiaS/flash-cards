
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
        FlashCardsFactory.getFlashCards(category).then(function(cards){
           
            $scope.flashCards = cards;
            $scope.currentCategory = category;
            // console.log(category);
            // console.log($scope.currentCategory)
        });

    }

});