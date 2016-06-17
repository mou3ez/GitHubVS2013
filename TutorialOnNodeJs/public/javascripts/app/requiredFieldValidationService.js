angular.module("productCategoryModule")
.factory("requiredFieldValidationService", requiredFieldValidationService);


function _getRequiredValidationMessage(requiredInfo) {

    var errorMessage = [];
    if (requiredInfo.length > 0) {

        angular.forEach(requiredInfo, function (requiredInf) {

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

    getRequiredValidationMessage: _getRequiredValidationMessage
};
}

