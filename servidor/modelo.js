
function Sistema(){
    this.usuarios = {};// que tipo de coleccion??
    //operaciones sobre la colección
    this.agregarUsuario = function(nick){
        let res={"nick":-1};
        if (!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
            res.nick=nick;
        }
        else{
            console.log("el nick "+nick+" está en uso"); 
        }
        return res;
    }

    this.eliminarUsuario = function(nick){
        res = false
        if(this.usuarios[nick]){
            delete this.usuarios[nick]
            res = true
        }
        return res
    }

    this.obtenerUsuarios = function(){
        //let lista=[];
        
        return this.usuarios
    }

    this.usuarioActivo = function(nick){
        return this.usuarios[nick]!=undefined;
    }
    this.numeroUsuarios = function(){
        //return Object.keys(this.usuarios).length;
        let res = {"num":Object.keys(this.usuarios).length};
        return res
    }
}

function Usuario(){
    this.nick = this.nick;
}

module.exports.Sistema=Sistema;