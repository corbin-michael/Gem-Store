(function() {
   var app = angular.module('store', []);

   // store controller
   app.controller('StoreController', function(){
      this.products = gems;
   });

   // app.controller('PanelController', function() {
   //
   // });

   app.controller('ReviewController', function() {
      this.review = {};
      this.addReview = function(product) {
         this.review.createdOn = Date.now();
         product.reviews.push(this.review);
         this.review = {};
      }
   });

   app.directive('productTitle', function() {
      return {
         restrict: 'E',
         templateUrl: 'product_title.html'
      };
   });

   app.directive('productPanels', function() {
      return {
         restrict: 'E',
         templateUrl: 'product_tabs.html',
         controller: function() {
            this.tab = 1;

            this.selectTab = function(setTab) {
               this.tab = setTab;
            };

            this.isSelected = function(checkTab) {
               return this.tab === checkTab;
            };
         },
         controllerAs: 'panel'
      };
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
         ],
         reviews: [
            {
               stars: 3,
               body: "I think this gem is the best around!",
               author: "jimmy@gems.com",
               createdOn: 139749903475
            },
            {
               stars: 4,
               body: "It couldn't get any better.",
               author: "nobetter@gems.com",
               createdOn: 924382398223
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
         ],
         reviews: [
            {
               stars: 0,
               body: "This thing sucks!",
               author: "jimmy@gems.com",
               createdOn: 139749903475
            },
            {
               stars: 24,
               body: "It couldn't get any better.",
               author: "nobetter@gems.com",
               createdOn: 924382398223
            }
         ]
      }
   ];
})();
