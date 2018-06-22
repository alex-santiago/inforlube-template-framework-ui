const inforlub = new Object();

inforlub.controllers = {};

/* exceptionslog */
inforlub.controllers.exceptionslog = {};
inforlub.controllers.exceptionslog.getlogs = function (parameters, onSuccess) {
    ajaxPost(host + 'exceptionslog', null, parameters, function (json) {
        onSuccess(json);
    }, onError);
}

/* protocols */
inforlub.controllers.protocols = {};
inforlub.controllers.protocols.getprotocols = function (parameters, onSuccess) {
    ajaxPost(host + 'Protocols', null, parameters, function (json) {
        onSuccess(json);
    }, onError);
}
