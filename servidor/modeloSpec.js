const modelo = require("./modelo.js");

describe('El sistema ...', function() {
  
  let sistema;

  beforeEach(function(){
    sistema = new modelo.Sistema()
  });
  
  it('Incialmente no hay usuarios', function(){
    expect(sistema.numeroUsuarios()).toEqual({"num":0});
  })
  
  
  it("Comprobamos agregar usuario con nick", function(){
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios()).toEqual({"num":0});
    //agregar un usuario concreto
    sistema.agregarUsuario("Pepe");
    //comprobar que hay 1 usuario en el sistema
    expect(sistema.numeroUsuarios()).toEqual({"num":1});
    expect(sistema.usuarioActivo("Pepe")).toEqual({"activo":true});

  });

  it("Comprobamos eliminar usuario", function(){
    //comprobar que no hay usuario
    expect(sistema.numeroUsuarios()).toEqual({"num":0});
    //agregamos un usuario
    sistema.agregarUsuario("Pepe");
    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios()).toEqual({"num":1});
    expect(sistema.usuarioActivo("Pepe")).toEqual({"activo":true});
    //eliminamos el usuario
    sistema.eliminarUsuario("Pepe");
    //comprobamos que el usuario eliminado no esta en el sistema
    expect(sistema.numeroUsuarios()).toEqual({"num":0});
  });

  it("comprobar usuario activo", function(){
    //comprobar que no hay usuario
    expect(sistema.numeroUsuarios()).toEqual({"num":0});
    //agregamos un usuario
    sistema.agregarUsuario("Pepe");
    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios()).toEqual({"num":1});
    expect(sistema.usuarioActivo("Pepe")).toEqual({"activo":true});
  });

  xit("comprobar el método número de usuarios", function(){
    //calcular las claves del array asociativo Object.keys(sistema.usuarios)
    //comprobamos que el valor pro numeroUsuarios() es igual al anterior
  });

});