(function() {
   var app = angular.module('store', []);

   // store controller
   app.controller('StoreController', function(){
      this.product = gem;
   });

   // object
   var gem = {
      name: 'Dedecahedron',
      price: 2.95,
      description: 'This is the really awesome description of the Dedacahedron gem.'
   }
})();
