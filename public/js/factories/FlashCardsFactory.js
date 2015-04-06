
app.factory("FlashCardsFactory", function($http){

    //$http library is for making AJAX requests
     
   
    return {
        getFlashCards: function(category){
            var req = {
                method: 'GET',
                url: '/cards',
                params: { category: category }
                }

           return $http(req).then(function(response){
                return response.data;
                //response itself returns server's response with data, status code and so on.
                // .data returns an array of cards.
            });
        }};
});


// or

//     return {
//         getFlashCards: function(){
//             return $http.get('/cards').then(function(response){
//                 return response.data;
//             });
//             //returns a promise. Use .then to get a value of this promise
//             };
//     };
// });