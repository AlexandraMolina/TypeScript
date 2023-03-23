"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
var personas = [];
personas.push(new persona_1.persona("Lina", "Molina Ospina", 24, "12345678M", new Date(1998, 9, 16), "rojo", "Femenino", new direccion_1.Direccion("Castilla", 11, 4, "B", 19002, "Guadalajara", "Guadalajara"), new mail_1.Mail("oficina", "prueba@gmail.com"), new telefono_1.Telefono("Casa", 3261117), "Solo llamara apartir de las 9:00 am"));
personas.push(new persona_1.persona("Cristian", "Bolaños Ospina", 22, "66826918L", new Date(2000, 9, 3), "negro", "Masculino", new direccion_1.Direccion("Juan Diges de Anton", 4, 9, "D", 19003, "Guadalajara", "Guadalajara"), new mail_1.Mail("casa", "crists@gmail.com"), new telefono_1.Telefono("oficina", 3163279822), "No llamar apartir de las 22h"));
personas.push(new persona_1.persona("Aura", "Ospina Cardona", 24, "16754600F", new Date(1971, 6, 12), "rojo", "Femenino", new direccion_1.Direccion("Principe de Asturias", 6, 3, "C", 19001, "Alovera", "Guadalajara"), new mail_1.Mail("Casa", "aura@gmail.com"), new telefono_1.Telefono("Casa", 546987412), "Solo llamar en caso de emergencia"));
/*MUESTRA SIN MODIFICAR */
console.log("Datos Sin Modificar:");
imprimirDatos();
var filtro = personas.filter(function (busca) { return busca.DNI == "16754600F"; })[0];
var newDireccion = new direccion_1.Direccion("Toronga", 31, 4, "B", 18003, "Madrid", "Madrir");
var newTelefono = new telefono_1.Telefono("Empresa", 953481232);
var newMail = new mail_1.Mail("Empresa", "cliente@hotmail.com");
filtro.Direccion = newDireccion;
filtro.telefono = newTelefono;
filtro.mail = newMail;
console.log("Datos Nuevos:");
imprimirDatos();
function imprimirDatos() {
    for (var i = 0; i < personas.length; i++) {
        console.log(personas[i].toString());
    }
}
