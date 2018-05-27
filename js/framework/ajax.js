
var ajaxGet = function(url, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			onSuccess(json);
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
    console.log('url');
    console.log(url);
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = function() {
			spinner.stop();

			if (xhr.status === 200) {
				var json = JSON.parse(xhr.responseText);
				onSuccess(json);
			}
			else {
				onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
			}
		};

		spinner.spin(spinnerTarget);
		xhr.send();
}

var ajaxPost = function(url, json, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var json={};

			if(xhr.responseText){
				json = JSON.parse(xhr.responseText);
			}
			onSuccess(json);
		}
		else{
			onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
		}
	};

	spinner.spin(spinnerTarget);

	var jsonStr = '';

	if(json){
		console.log(json);
		jsonStr = JSON.stringify(json);
	}

	xhr.send(jsonStr);
}

var ajaxPostPathParam = function(url, pathParams, Params, onSuccess, onError){
	var xhr = new XMLHttpRequest();

	url = buildUrl(url, pathParams);
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var returnData={};

			if(xhr.responseText){
				returnData = JSON.parse(xhr.responseText);
			}
			onSuccess(returnData);
		}
		else{
			onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
		}
	};

	spinner.spin(spinnerTarget);

	var paramsStr = '';

	if(Params){
		paramsStr = JSON.stringify(Params);
	}

	xhr.send(paramsStr);
}

var ajaxPut = function(url, json, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			onSuccess();
		}
		else{
			onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
		}
	};

	spinner.spin(spinnerTarget);
	xhr.send(JSON.stringify(json));
}

var ajaxPutPathParam = function(url, pathParams, Params, onSuccess, onError){
    var xhr = new XMLHttpRequest();

    url = buildUrl(url, pathParams);
		xhr.open('PUT', url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			spinner.stop();

			if (xhr.status === 200) {
				onSuccess();
			}
			else{
				console.log('Error');
				onError( xhr.status, 'Request failed. Status: ' + xhr.status + ' readyState: ' + xhr.readyState + ' responseText: ' + xhr.responseText );
			}
		};

		spinner.spin(spinnerTarget);
		xhr.send(JSON.stringify(Params));
}

var ajaxDelete = function(url, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', url);
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			onSuccess();
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
var paramToString = function (param) {
    if (param == undefined || param == null) {
        return 'null';
    }
    if (param instanceof Date) {
        return param.toJSON();
    }
    return param.toString();
}

// Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
var buildUrl = function (path, pathParams) {
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
}
