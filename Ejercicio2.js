function menu(){
    const nombre=[];
    let opcion=0;
    do{
        console.log("MENU DE OPCIONES");
        console.log("1- CREAR");
        console.log("2- LEER");
        console.log("3- ACTUALIZAR");
        console.log("4- BORRAR");
        console.log("5- SALIR ");
        opcion=prompt("Elige una opcion del 1 al 5: ");
        if (opcion==1) {
            let x=prompt("ingresar la cantidad de nombres que desee: ");
            for (let a=0; a<x;a++) {
                let nom=prompt("Nombre"+(a+1));
                nombre.push(nom);
            }
        }
        if (opcion==2) {
            for (let a=0; a<nombre.length;a++) {
                console.log(nombre[a]);
            }
        }
        if (opcion==3) {
            let a=prompt("Que posicion cambiara:");
            b=nombre[a];
            console.log(b);
            nombre.pop();
            let c=prompt("ingresar nuevo nombre");
            nombre.push(c);
        }
        if (opcion==4) {
            nombre.pop();
            for (let a=0; a<nombre.length;) {
            console.log(nombre);
            }
        }
        
    } while (opcion!=5);
}
    