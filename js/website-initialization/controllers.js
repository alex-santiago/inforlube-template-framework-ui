inforlub.controllers = {};

/* brands */
inforlub.controllers.brands = {};
inforlub.controllers.brands.getlist = function (parameters, onSuccess) {
    var brands = loadCache('brands');

    if(brands != null && brands.length > 0){
        onSuccess(brands);
        return;
    }

    ajaxPost(host + 'brands/getlist', parameters, function (json) {
        saveCache('brands', json);
        onSuccess(json);
    });
}

/* models */
inforlub.controllers.models = {};
inforlub.controllers.models.getlist = function (parameters, onSuccess) {
    ajaxPost(host + 'models/getlist', parameters, function (json) {
        onSuccess(json);
    });
}

inforlub.controllers.models.checklists = function (parameters, onSuccess) {
    ajaxPost(host + 'models/checklists', parameters, function (json) {
        onSuccess(json);
    });
}
inforlub.controllers.models.products = function (parameters, onSuccess) {
    ajaxPost(host + 'models/products', parameters, function (json) {
        onSuccess(json);
    });
}

/* engines */
inforlub.controllers.engines = {};
inforlub.controllers.engines.getlist = function (parameters, onSuccess) {
    ajaxPost(host + 'engines/getlist', parameters, function (json) {
        onSuccess(json);
    });
}

/* clients */
inforlub.controllers.clients = {};
inforlub.controllers.clients.listclients = function (onSuccess) {
    ajaxGet(host + 'clients', function (json) {
        onSuccess(json);
    });
}

/* exceptionslog */
inforlub.controllers.exceptionslog = {};
inforlub.controllers.exceptionslog.getlogs = function (parameters, onSuccess) {
    ajaxPost(host + 'exceptionslog', parameters, function (json) {
        onSuccess(json);
    });
}

/* protocols */
inforlub.controllers.protocols = {};
inforlub.controllers.protocols.getprotocols = function (parameters, onSuccess) {
    ajaxPost(host + 'Protocols', parameters, function (json) {
        onSuccess(json);
    });
}
