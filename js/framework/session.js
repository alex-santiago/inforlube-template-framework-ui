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
    sessionObj.error = new Object();
    sessionObj.host = getHost();
    initSession();

    saveSession();
}

const getHost = () => {
  let host = loadCache('host');
  if (host == null || typeof host == 'undefined') {
    host = getParameterByName('host');
    saveCache('host', host);
  }
  return host;
};

var saveCache = function(name, data){
    localStorage.setItem(name, JSON.stringify(data));
}

var loadCache = function(name){
    return JSON.parse(localStorage.getItem(name));
}
