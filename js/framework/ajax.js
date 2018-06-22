
var ajaxGet = function(url, pathParams, queryParams, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	if (typeof pathParams !== 'undefined' && pathParams != null && pathParams !== '') {
		url = buildUrl(url, pathParams);
	}
	if (typeof queryParams !== 'undefined' && queryParams != null && queryParams !== '') {
		url = buildUrlQueryString(url, queryParams);
	}
	xhr.open('GET', url);
	ajaxOutput (url, pathParams, queryParams);

	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var returnData={};
			if(xhr.responseText){
				returnData = JSON.parse(xhr.responseText);
			}
			outputReturnData (returnData);
			onSuccess(returnData);
		}
		else {
			onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
		}
	};

	spinner.spin(spinnerTarget);
	xhr.send();
}

var ajaxPost = function(url, pathParams, params, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	if (typeof pathParams !== 'undefined' && pathParams != null && pathParams !== '') {
		url = buildUrl(url, pathParams);
	}
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json');

	ajaxOutput (url, pathParams, params);
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var returnData={};
			if(xhr.responseText){
				returnData = JSON.parse(xhr.responseText);
			}
			outputReturnData (returnData);
			onSuccess(returnData);
		}
		else{
			onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
		}
	};

	spinner.spin(spinnerTarget);

	var paramsStr = '';
	if(params){
		paramsStr = JSON.stringify(params);
	}
	xhr.send(paramsStr);
}

var ajaxPut = function(url, pathParams, params, onSuccess, onError){
  var xhr = new XMLHttpRequest();

	if (typeof pathParams !== 'undefined' && pathParams != null && pathParams !== '') {
		url = buildUrl(url, pathParams);
	}
	xhr.open('PUT', url);
	xhr.setRequestHeader('Content-Type', 'application/json');

	ajaxOutput (url, pathParams, params);
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var returnData={};
			if(xhr.responseText){
				returnData = JSON.parse(xhr.responseText);
			}
			outputReturnData (returnData);
			onSuccess(returnData);
		}
		else{
			onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
		}
	};

	spinner.spin(spinnerTarget);
	xhr.send(JSON.stringify(params));
}

var ajaxDelete = function(url, pathParams, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	if (typeof pathParams !== 'undefined' && pathParams != null && pathParams !== '') {
		url = buildUrl(url, pathParams);
	}

	xhr.open('DELETE', url);
	xhr.setRequestHeader('Content-Type', 'application/json');

	ajaxOutput (url, pathParams, {});
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var returnData={};
			if(xhr.responseText){
				returnData = JSON.parse(xhr.responseText);
			}
			outputReturnData (returnData);
			onSuccess(returnData);
		}
		else{
			onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
		}
	};

	spinner.spin(spinnerTarget);
	xhr.send();
}

// ------------------------------------------------------
// API CLIENT FUNCTIONS
// ------------------------------------------------------
const paramToString = function (param) {
    if (param == undefined || param == null) {
        return 'null';
    }
    if (param instanceof Date) {
        return param.toJSON();
    }
    return param.toString();
};

// Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
const buildUrl = function (path, pathParams) {
//    if (!path.match(/^\//)) {
//        path = '/' + path;
//    }
    var url = path;

    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
        var value;
        if (pathParams.hasOwnProperty(key)) {
            value = paramToString(pathParams[key]);
        } else {
            value = paramToString(pathParams);
        }
        return encodeURIComponent(value);
    });
    return url;
};

const buildUrlQueryString = (path, queryParams) => {
	   if (!path.match(/\?$/)) {
	       path = path + '?';
	   }
	var url = path;

	url = url + buildQueryString(queryParams);
	return url;
};

const toString = Object.prototype.toString;
 // Builds an URL querystring to append in a given base path URL by using the object properies as query variables
const buildQueryString = (obj, prefix) => {
	if (prefix && (obj === null || typeof obj == 'undefined')) {
 		return prefix + '=';
	} else if (toString.call(obj) == '[object Object]') {
	 	return stringifyObject(obj, prefix);
	} else if (prefix) { // string inside array or hash
	 	return prefix + '=' + encodeURIComponent(String(obj));
	} else if (String(obj).indexOf('=') !== -1) { // string with equal sign
	 	return String(obj);
	} else {
	 	throw new TypeError('Cannot build a querystring out of: ' + obj);
	}
};

const stringifyObject = (obj, prefix) => {
  var ret = [];

  Object.keys(obj).forEach(function(key) {
    ret.push(buildQueryString(obj[key], prefix
      ? prefix + '[' + encodeURIComponent(key) + ']'
      : encodeURIComponent(key)));
  })

  return ret.join('&');
}

const ajaxOutput = (url, pathParams, Params) => {
	if (typeof AJAX_DEBUG == 'undefined' || !AJAX_DEBUG ) {
		return;
	}
	console.log('url');
	console.log(url);
	console.log('pathParams');
	console.log(pathParams);
	console.log('Params');
	console.log(Params);
	console.log(JSON.stringify(Params));
};
const outputReturnData = (returnData) => {
	if (typeof AJAX_DEBUG == 'undefined' || !AJAX_DEBUG ) {
		return;
	}
	console.log('returnData');
	console.log(returnData);
}
