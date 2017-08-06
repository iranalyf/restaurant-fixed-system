module.exports = function(app){

    var Restaurante = app.models.Restaurante;

    var RestauranteController = {
        form: function(req,res){
            res.render("restaurantes/cadastroRestaurante");
        },

        create: function(req,res){         
            var restaurante  = new Restaurante();
            restaurante.nome = req.body.nome;

            restaurante.save(function(err){
                if(err){
                    req.flash("erro","Erro ao salvar");
                    res.render("restaurantes/cadastroRestaurante");
                }else{
                    req.flash("info","Restaurante cadastrado com sucesso..");
                    res.redirect("/restaurantes/novo");
                }
            });
        },

        pesquisa: function(req,res){
            Restaurante.find(function(err,data){
                if(err){
                    req.flash("erro", "Erro ao buscar restaurantes"+ err);
                    res.redirect("/restaurantes");
                }else{
                    res.render("restaurantes/pesquisaRestaurantes", {restaurantes: data});
                }
            });
        }
    }
    return RestauranteController;
}