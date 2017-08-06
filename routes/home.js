module.exports  = function(app){

    var home = app.controllers.HomeController;

    app.route("/home")
        .get(home.index);
}