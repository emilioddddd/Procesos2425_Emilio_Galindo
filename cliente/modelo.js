
function Sistema(){
    this.usuarios = {};// que tipo de coleccion??
    //operaciones sobre la colección
    this.agregarUsuario = function(nick){
        if(!this.usuarios[nick]){
            this.usuarios[nick] = new Usuario(nick);
        }
    }

    this.eliminarUsuario() = function(nick){
        res = false
        if(this.usuarios[nick]){
            delete this.usuarios[nick]
            res = true
        }
        return res
    }
}

function Usuario(){
    this.nick = this.nick;
}