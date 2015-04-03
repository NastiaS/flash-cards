
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