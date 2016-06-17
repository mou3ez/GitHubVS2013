angular.module("productCategoryModule")
.controller("productCategoryController", productCategoryController);

productCategoryController.$inject = ['$scope', '$timeout' ,'productCategoryService'];

function productCategoryController($scope, $timeout , productCategoryService) {


    $scope.productCategory = { 

        categoryName: "",
        categoryDetails: ""

    };

    $scope.message = {
        
        containsSuccessfulMessage : false,
        successfulMessage : ""
    };


    $scope.validationResult = {

        containsValidationError : false,
        validationSummary : ""

    };

    function clearProductCategory() {

        $scope.productCategory.categoryName = "";
        $scope.productCategory.categoryDetails = "";
    }

    function clearMessage() {

        $scope.message.containsSuccessfulMessage = false;
        $scope.message.successfulMessage = "";
    }

    function displayMessage() {

        $scope.message.containsSuccessfulMessage = false;
        $scope.message.successfulMessage = "";
    }

    $scope.createProductCategory = function (productCategory) {

        var validationMessages = requiredFieldValidationService.validationErrorMessage(
        [
            { name: $scope.productCategory.categoryName || "", errorMessage: 'Enter name' },
               { name: $scope.productCategory.categoryDetails || "", errorMessage: 'Enter details' }

        ]);

        if (validationMessages.length > 0) {

            $scope.validationResult.containsValidationError = true;

            angular.element("#validationErrorMessage").empty();
            validationMessages.forEach(function (errorMessage) {

                angular.element("<li></li>")
                .html(errorMessage)
                .appendTo("#validationErrorMessage")
            });

        }

        else {

            $scope.validationResult.containsValidationError = false;
            productCategoryService.createProductCategory(productCategory)
             .success(function (data) {

                 if (data.status
                     && data.status == 'successful')
                     displayMessage;
                 $timeout(function () {
                     clearMessage();
                     clearProductCategory();

                 }, 5000)

             });

        }

    }

}

