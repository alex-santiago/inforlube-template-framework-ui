var sessionObj;

var loadSession = function(){
    sessionObj = JSON.parse(localStorage.getItem('sessionObj'));

    if(sessionObj == null){
        clearSession();
    }
}

var saveSession = function(){
    localStorage.setItem('sessionObj', JSON.stringify(sessionObj));
}

var clearSession = function(){
    sessionObj = new Object();
    sessionObj.protocols = new Object();
    sessionObj.exceptions = new Object();

    saveSession();
}

var saveCache = function(name, data){
    localStorage.setItem(name, JSON.stringify(data));
}

var loadCache = function(name){
    return JSON.parse(localStorage.getItem(name));
}
