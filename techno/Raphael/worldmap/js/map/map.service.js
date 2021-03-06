///
/// @filename js/map.service.js
/// @datecreation 20/10/2015
///

(function(MapConfig) {

    window.MapService = {
        GetCountryInformations : GetCountryInformations
    };

    ///////////////////////////////////

    function GetCountryInformations (code, callback) {

        var endpoint = MapConfig.endpoint + code;
        var country;

        $.ajax({
            url : endpoint,
            type : 'GET',
            success : successCallback,
            error : errorCallback,
            complete : completeCallback
        });

        function successCallback (data, statut) {
            country = data[0];
            callback(data[0]);
        }

        function errorCallback (data, statut, erreur) {
            alert("erreur");
            alert(data);
        }

        function completeCallback (data, statut){
            // alert("ok c'est fini");
        }

    };

})(MapConfig)