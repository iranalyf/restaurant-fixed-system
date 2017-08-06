module.exports = function(app){

    var prato = app.controllers.PratoController;

    app.route("/pratos")
        .get(prato.pesquisa);

    app.route("/pratos/novo")
        .get(prato.form)
        .post(prato.create);
}