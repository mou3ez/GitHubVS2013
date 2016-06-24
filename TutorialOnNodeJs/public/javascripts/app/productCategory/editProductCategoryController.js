angular.module("productCategoryModule")
.controller("editProductCategoryController", editProductCategoryController);

editProductCategoryController.$inject = ['$scope', '$timeout', 'productCategoryService'];

function editProductCategoryController($scope, $timeout, productCategoryService) {

    $scope.productCategory = {

        categoryName: "",
        categoryDetails: ""

    };

    getProductCategoryById();

    function bindView(productCategory) {

        $scope.productCategory.categoryName = productCategory.CategoryName;
        $scope.productCategory.details = productCategory.Details;

    }

    function getProductCategoryById() {

        productCategoryService.getProductCategoryById
            (productCategoryService.getIdFromEndPoint()).
        success(function (data) {

            if (data 
                && data.productCategories 
                && data.productCategories.length > 0) {
                $scope.productCategories = data.productCategories;

               // $scope.productCategories = data.productCategories;
                bindView($scope.productCategories[0]);
            }
            })
            }
    
}
