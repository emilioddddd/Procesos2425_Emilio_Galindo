function ClienteRest(){

    this.agregarUsuario=function(nick){
        var cli=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){ 
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
            }
            else{
                console.log("El nick ya está ocupado");
            }
        });
        // este codigo se ejecuta sin esperar a que se resuelva 
    }
    
    this.eliminarUsuario = function(nick){
        var cli = this;
        $.getJSON("/eliminarUsuario/"+nick, function(data){
            if (data.eliminado){
                console.log("Usuario "+nick+" a sido eliminado")
            }else{
                console.log("Usuario "+nick+ " ya ha sido eliminado")
            }
        }) 
    }

    this.numeroUsuarios = function(){
        var cli = this;
        $.getJSON("/numeroUsuarios/", function(data){
            console.log("numero: " + data.num)
        })
    }
     
    this.usuarioActivo = function(nick){
        var cli = this;
        $.getJSON("/usuarioActivo/", function(data){
            if(data.activo){
                console.log("Usuario " + nick + " esta activo")
            }else{
                console.log("Usuario " + nick + " no esta activo")
            }
        })
        let res = {"activo":false}
        if (this.usuarios[nick]!=undefined){
            return res = {"activo":true};
        }
        return res
    }
}