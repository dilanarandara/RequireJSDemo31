(function () {
    requirejs.config(
        {
            paths: {
                'jquery': '/Scripts/jquery-1.8.2.min'
            }
        }
    );

    require(
        ['caller'],
        function (caller) {
            var id = 10;
            caller.showMessage(id);
        }
    );
})();