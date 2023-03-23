import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";
import { persona } from "./persona";

let personas: persona[]=[];

personas.push(new persona("Lina", "Molina Ospina", 24,"12345678M",new Date(1998,9,16),"rojo","Femenino",
              new Direccion("Castilla",11,4,"B",19002, "Guadalajara", "Guadalajara"),
              new Mail("oficina","prueba@gmail.com"),
              new Telefono("Casa",3261117),
              "Solo llamara apartir de las 9:00 am"
));

personas.push(new persona("Cristian", "Bolaños Ospina", 22,"66826918L",new Date(2000,9,3),"negro","Masculino",
              new Direccion("Juan Diges de Anton",4,9,"D",19003, "Guadalajara", "Guadalajara"),
              new Mail("casa","crists@gmail.com"),
              new Telefono("oficina",3163279822),
              "No llamar apartir de las 22h"
));


personas.push(new persona("Aura", "Ospina Cardona", 24,"16754600F",new Date(1971,6,12),"rojo","Femenino",
              new Direccion("Principe de Asturias",6,3,"C",19001, "Alovera", "Guadalajara"),
              new Mail("Casa","aura@gmail.com"),
              new Telefono("Casa",546987412),
              "Solo llamar en caso de emergencia"
));
/*MUESTRA SIN MODIFICAR */
console.log("Datos Sin Modificar:");

imprimirDatos();

let filtro: persona = personas.filter(busca=>busca.DNI=="16754600F")[0];

let newDireccion : Direccion = new Direccion("Toronga", 31, 4, "B", 18003, "Madrid", "Madrir");
let newTelefono : Telefono= new Telefono("Empresa", 953481232);
let newMail:  Mail = new Mail("Empresa", "cliente@hotmail.com")

filtro.Direccion= newDireccion;
filtro.telefono= newTelefono;
filtro.mail=newMail;


console.log("Datos Nuevos:");
imprimirDatos();


function imprimirDatos(){
    for(let i = 0; i < personas.length; i++) {
        console.log(personas[i].toString());
    }
}