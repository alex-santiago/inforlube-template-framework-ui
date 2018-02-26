var app = {};

app.init = function(){

    clearSession();

    routes.init();

    riot.compile(function() {
      riot.mount('#wrapper', 'wrapper');
      route.start(true);
    })

}
