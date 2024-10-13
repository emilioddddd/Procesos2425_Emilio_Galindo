
function Sistema(){
    this.usuarios = {};// que tipo de coleccion??
    //operaciones sobre la colección
    this.agregarUsuario = function(nick){
        if (!nick){
            return false;
        }
        if(!this.usuarios[nick]){
            this.usuarios[nick] = new Usuario(nick);
        }
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
        return this.usuarios
    }

    this.usuarioActivo = function(nick){
        return this.usuarios[nick]!=undefined;
    }
    this.numeroUsuarios = function(){
        return Object.keys(this.usuarios).length;
    }
}

function Usuario(){
    this.nick = this.nick;
}

module.exports.Sistema=Sistema;