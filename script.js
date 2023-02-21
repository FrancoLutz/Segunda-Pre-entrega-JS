class Contacto {
  constructor (nombre, apellido, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
  }
}

let contactos = [];
let operando = true;


while (operando) {
 let opcion = Number(prompt(`###SELECIONE UNA OPCION### \n 1) AGREGAR UN NUEVO CONTACTO \n 2) BORRAR UN CONTACTO \n 3) LISTAR TODOS LOS CONTACTOS \n  PARA SALIR PRESIONE ENTER O INGRESE "0"`));

  switch (opcion) {
    case 0:
      alert(`Se cerró el sistema`);
      operando = false;
      break;
    case 1:
      let nom = prompt("Ingrese Nombre del Contacto");
      let ape = prompt("Ingrese Apellido del Contacto");
      let email = prompt("Ingrese el e-mail del contacto");
      let tel = Number(prompt("Ingrese Telefono del Contacto"));
      
      if (typeof nom === 'string' || nom === "" && typeof ape === 'string' || ape === "" && typeof email === 'string' || email === "" && typeof tel == 'number' || tel === "") {
        contacto = new Contacto(nom, ape, email, tel);
        agregarContacto();
        cuentaContactos();
      } else {
        alert("controle los Datos Ingresados");
      }
      break;
      case 2:
         emailContacto = prompt(`Ingrese el email del Contacto que desea Eliminar`);
        eliminaContacto(emailContacto);   
        break;
      case 3:
         listarContactos();
        break;
    default:
      alert("Seleccione una opcion valida");
  }
}

function agregarContacto(){
  contactos.push(contacto);
  console.log(contactos);
}

function eliminaContacto(mail){
  const resultado = contactos.find(contacto => contacto.email === mail);
  if(resultado === undefined){
    console.log(`No existe ese e-mail en tus Contactos`);
  }else{
    console.log(resultado);
    let indice = contactos.findIndex(contacto => contacto.email === mail);
    //alert(indice);
    contactos.splice(indice, 1);
    cuentaContactos();
  }
}

function cuentaContactos(){
  console.log(`Tu Agenda tiene ${contactos.length} Contactos`);
}

function listarContactos(){
  for(let contacto of contactos){
    console.log(`Datos de los Contactos nombre: ${contacto.nombre} \n Apellido: ${contacto.apellido} \n e-mail: ${contacto.email} \n telefono ${contacto.telefono}`);
  }
}






