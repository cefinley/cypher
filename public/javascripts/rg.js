// Top level Module for real gravity js
var RG = function() {

    // private variables
    var error_msg = "Sorry, there was a problem";
    var completion_msg = "Request Completion";

    // private methods

    // Object literal returned, holds public var and methods
    return {
        // public variables

        // public methods
        
        // Common ajax error handler
        error_handler : function(xhr, status) {
            alert(error_msg);
            console.log(error_msg);
            alert(status);
        },

        // Common ajax completions handler
        completion_handler : function(xhr, status) {
            alert(completion_msg);
            console.log(completion_msg);
        }

    } // end public methods
}();