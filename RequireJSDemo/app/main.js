(function () {
    requirejs.config(
        {
            paths: {
                'jquery': '/Scripts/jquery-1.8.2.min',
                'caller': '/app/viewmodels/caller',
                'dataservice': '/app/services/dataservice',
                'config': '/app/configs/config'
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