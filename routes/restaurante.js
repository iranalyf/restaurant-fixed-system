module.exports = function(app){

    var restaurante = app.controllers.RestauranteController;

    app.route("/restaurantes")
        .get(restaurante.pesquisa);

    app.route("/restaurantes/novo")
        .get(restaurante.form)
        .post(restaurante.create);

    
}