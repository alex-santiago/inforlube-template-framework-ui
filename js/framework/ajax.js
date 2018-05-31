
var ajaxGet = function(url, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	ajaxOutput (url, {}, {});

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

var ajaxGetPathParam = function(url, pathParams, onSuccess, onError){
    var xhr = new XMLHttpRequest();

    url = buildUrl(url, pathParams);
    xhr.open('GET', url);
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
			else {
				onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
			}
		};

		spinner.spin(spinnerTarget);
		xhr.send();
}

var ajaxPost = function(url, params, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json');

	ajaxOutput (url, {}, params);
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

var ajaxPostPathParam = function(url, pathParams, params, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	url = buildUrl(url, pathParams);
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

var ajaxPut = function(url, params, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	xhr.open('PUT', url);
	xhr.setRequestHeader('Content-Type', 'application/json');

	ajaxOutput (url, {}, params);
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

var ajaxPutPathParam = function(url, pathParams, params, onSuccess, onError){
    var xhr = new XMLHttpRequest();

    url = buildUrl(url, pathParams);
		xhr.open('PUT', url);
		xhr.setRequestHeader('Content-Type', 'application/json');

		ajaxOutput (url, pathParams, params);
		xhr.onload = function() {
			spinner.stop();

			outputReturnData ({});
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

var ajaxDelete = function(url, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	ajaxOutput (url, {}, {});
	xhr.open('DELETE', url);
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

const ajaxOutput = (url, pathParams, Params) => {
	if (typeof ajaxDebug == 'undefined' || !ajaxDebug ) {
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
	if (typeof ajaxDebug == 'undefined' || !ajaxDebug ) {
		return;
	}
	console.log('returnData');
	console.log(returnData);
}
