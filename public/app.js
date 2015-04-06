var app = angular.module('FlashCards', []);



app.filter("Cheat", function(){

    return function(flashCards){
        return flashCards.filter(function(item){
            return item.correct;
        })
    }
})



