angular.module("productCategoryModule")
.factory("productCategoryService", productCategoryService);

productCategoryService.$inject = ['$http', '$location'];

function productCategoryService($http, $location) {

    return {

        createProductCategory: function (productCategory) {

            return $http.post('/createProductCategory',
                {
                    categoryName: productCategory.categoryName,
                    details: productCategory.details
                }
                );
        },

        getAllProductCategories : function () {
            return $http.get('/api/getAllProductCategory');
        },

        getIdFromEndPoint : function () {

            var absoluteUrl = $location.absUrl();
            var segments = absoluteUrl.split("/");
            var productCategoryId = segments[segments.length - 1];
            return productCategoryId
        },


        getProductCategoryById : function (productCategoryId) {

            return $http.get('/api/getProductCategoryById/' + productCategoryId);
        }

    };


}