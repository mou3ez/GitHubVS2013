angular.module("productCategoryModule")
.controller("editProductCategoryController", editProductCategoryController);

editProductCategoryController.$inject = ['$scope', '$timeout', 'productCategoryService', 'requiredFieldValidationService'];

function editProductCategoryController($scope, $timeout, productCategoryService, requiredFieldValidationService) {

    $scope.productCategory = {

        categoryName: "",
        categoryDetails: ""

    };

    getProductCategoryById();

    $scope.message = {

        containsSuccessfulMessage : false,
        successMessage : ""
    };

    function displayMessage() {

        $scope.message.containsSuccessfulMessage = true;
        $scope.message.successMessage = "A record updated";
    }

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



    $scope.editProductCategory = function () {

        var validationMessages = requiredFieldValidationService.getRequiredFieldValidationErrorMessage(
            
        [
            { name: $scope.productCategory.categoryName || "", errorMessage: 'Enter name\n' },
            { name: $scope.productCategory.details || "", errorMessage: 'Enter details' }
               
        ]);
       
        if (validationMessages.length > 0) {

            $scope.validationResult.containsValidationError = true;

            alert(validationErrorMessageId)

            angular.element(validationErrorMessage).empty();
            validationMessages.forEach(function (errorMessage) {

                angular.element("<li></li>")
                .html(errorMessage)
                .appendTo(validationErrorMessage)
            });

        }

        else {

            productCategoryService.updateProductCategory($scope.productCategory, productCategoryService.getIdFromEndPoint())
                .success(function (data) {

                    if(data && data.status 
                        && data.status == 'successful') {

                        displayMessage();
                    }
                })

            }
        }
    
}
