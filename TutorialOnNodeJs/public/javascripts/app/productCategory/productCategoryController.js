angular.module("productCategoryModule")
.controller("productCategoryController", productCategoryController);

productCategoryController.$inject = ['$scope', '$timeout' ,'productCategoryService'];

function productCategoryController($scope, $timeout , productCategoryService) {


    $scope.productCategory = { 

        categoryName: "",
        categoryDetails: ""

    };

    $scope.createProductCategory = function (productCategory) {

        productCategoryService.createProductCategory(productCategory)
        .sucess(function (data) {

       /*     $timeout(function () {
              
             
            }, 3000) */

        });

    }

}