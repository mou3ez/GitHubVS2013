angular.module("productCategoryModule")
.factory("requiredFieldValidationService", requiredFieldValidationService);


function requiredFieldValidationService() {

function _getRequiredValidationMessage(requiredInfos) {

    var errorMessage = [];
    if (requiredInfos.length > 0) {

        angular.forEach(requiredInfos, function (requiredInfo) {

            if (

                requiredInfo.name !== 'undefined'

                &&
                  (
                 requiredInfo.name == null
                || requiredInfo.name == ''
                || requiredInfo.name.length == 0)
              ) {
                errorMessage.push(requiredInfo.errorMessage);
            }
        });
    }
    return errorMessage;
}
return {

    getRequiredFieldValidationErrorMessage: _getRequiredValidationMessage
};
}

