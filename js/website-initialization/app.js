var app = {};

app.init = function(){

    routes.init();

    // clearSession();

    riot.compile(function() {
      riot.mount('#wrapper', 'wrapper');
      route.start(true);
    })

    loadSession();
}
