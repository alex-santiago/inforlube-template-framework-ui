inforlub.controllers = {};

/* exceptionslog */
inforlub.controllers.exceptionslog = {};
inforlub.controllers.exceptionslog.getlogs = function (parameters, onSuccess) {
    ajaxPost(host + 'exceptionslog', parameters, function (json) {
        onSuccess(json);
    }, onError);
}

/* protocols */
inforlub.controllers.protocols = {};
inforlub.controllers.protocols.getprotocols = function (parameters, onSuccess) {
    ajaxPost(host + 'Protocols', parameters, function (json) {
        onSuccess(json);
    }, onError);
}
