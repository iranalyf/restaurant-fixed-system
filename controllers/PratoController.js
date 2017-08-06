module.exports = function(app){

    var Prato = app.models.Prato; 

    var Restaurante = app.models.Restaurante;

    var PratoController = {

        pesquisa: function(req,res){
            Prato.find(function(err, data){
                if(err){
                    //tratar erro
                }else{
                    res.render("pratos/pesquisaPratos", {pratos: data});
                }
            });
        },

        form: function(req,res){
            Restaurante.find(function(err, data){
                if(err){
                    //tratar 
                }else{
                    res.render("pratos/cadastroPrato", {restaurantes: data});
                }
            });
            
        },

        create: function(req,res){
            var prato = new Prato(req.body);
            
            prato.save(function(err){
                if(err){

                }else{
                    req.flash("info","Prato " + prato.nome + " cadastrado com sucesso!");
                    res.redirect("/pratos/novo");
                }
            });
        }
    }
    return PratoController;  
}