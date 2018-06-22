jQuery.unparam = function (query) {
    var setValue = function(root, path, value){
        if(path.length > 1){
        var dir = path.shift();
        if( typeof root[dir] == 'undefined' ){
            root[dir] = path[0] == '' ? [] : {};
        }

        arguments.callee(root[dir], path, value);
        }else{
        if( root instanceof Array ){
            root.push(value);
        }else{
            root[path] = value;
        }
        }
    };
    var nvp = query.split('&');
    var data = {};
    for( var i = 0 ; i < nvp.length ; i++ ){
        var pair = nvp[i].split('=');
        var name = decodeURIComponent(pair[0]);
        var valueStr = decodeURIComponent(pair[1]).replaceAll('+', ' ');

        var value = Number(valueStr);

        if(isNaN(value)){
            value = valueStr;
        }

        var path = name.match(/(^[^\[]+)(\[.*\]$)?/);
        var first = path[1];
        if(path[2]){
        //case of 'array[level1]' || 'array[level1][level2]'
        path = path[2].match(/(?=\[(.*)\]$)/)[1].split('][')
        }else{
        //case of 'name'
        path = [];
        }
        path.unshift(first);

        setValue(data, path, value);
    }
    return data;
};

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

getActionImage = function(id){
    if(id == 0){ return "images/check_not-inspected.png"; } // No Checked
    if(id == 1){ return "images/close.png"; }               // Dont Have
    if(id == 2){ return "images/check_good.png"; }          // Good
    if(id == 3){ return "images/check_regular.png"; }       // Regular
    if(id == 4){ return "images/check_bad.png"; }           // Bad
    if(id == 5){ return "images/shopping-cart.png"; }       // Sale
    if(id == 6){ return "images/sell-and-service.png"; }    // Sale + Change
}

const formatLargeString = (text, maxSize) => {
  if (text) {
    if (maxSize == 0) {
      let scr = screen.width;
      if (scr <= 576) {
        maxSize = Math.round(scr * 0.05);
      }
      else {
        if ( (scr <= 768) ) {
          maxSize = Math.round(scr * 0.05);
        }
        else {
          if ( (scr <= 1024) ) {
            maxSize = Math.round(scr * 0.05);
          }
          else {
            maxSize = Math.round(scr * 0.1);
          }
        }
      }
    }
    if (text.length > maxSize) {
      return (text.substring(0, maxSize) + " (...)");
    }
    else {
      return text;
    }
  }
  else {
    return "No info";
  }
};

const daysBetweenDates = (date1, date2) => {
  let days = moment.utc(date2).diff(moment.utc(date1));
  days = days / (24 * 60 * 60 * 1000)
  return days;
};

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return args[n];
  });
};
