angular.module("productCategoryModule")
.factory("productCategoryService", productCategoryService);

productCategoryService.$inject = ['$http'];

function productCategoryService($http) {

    return {

        createProductCategory: function (productCategory) {

            return $http.post('/createProductCategory',
                {
                    categoryName: productCategory.categoryName,
                    details: productCategory.details
                }
                );
        },
        getAllProductCategories: function () {
            return $http('/getAllProductCategory')
        }
    };


}