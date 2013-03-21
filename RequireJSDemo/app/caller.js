define('caller',
    ['jquery', 'dataservice'],
    function ($, dataservice) {
        var showMessage = function (id) {
            dataservice.getMessage(id, function (message) {
                $("#message").html(message);
            });
        };

        return {
            showMessage: showMessage
        };
    }
);