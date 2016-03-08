(function() {
   var app = angular.module('store', []);

   // store controller
   app.controller('StoreController', function(){
      this.products = gems;
   });

   // object
   var gems = [
      {
         name: 'Dedecahedron',
         price: 2,
         description: 'This is the really awesome description of the Dedacahedron gem.',
         canPurchase: true,
         images: [
            {
               full: 'images/gem-01.gif',
               thumb: 'images/gem-02.gif'
            }
         ]
      },
      {
         name: 'Pentagonal Gem',
         price: 5.95,
         description: 'Who doesn\'t want a gem like this?',
         canPurchase: false,
         images: [
            {
               full: 'images/gem-03.gif',
               thumb: 'images/gem-04.gif'
            }
         ]
      }
   ];
})();
