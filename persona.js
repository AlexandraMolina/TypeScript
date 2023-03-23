"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var persona = /** @class */ (function () {
    function persona(nombre, apellidos, edad, DNI, cumple, colorFavorito, sexo, direccion, mail, telefono, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumple = cumple;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direccion = direccion;
        this._mail = mail;
        this._telefono = telefono;
        this._notas = notas;
    }
    Object.defineProperty(persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (value) {
            this._DNI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "cumple", {
        get: function () {
            return this._cumple;
        },
        set: function (value) {
            this._cumple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (value) {
            this._colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Notas", {
        get: function () {
            return this._notas;
        },
        set: function (value) {
            this._notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (value) {
            this._direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        set: function (value) {
            this._telefono = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "mail", {
        get: function () {
            return this._mail;
        },
        set: function (value) {
            this._mail = value;
        },
        enumerable: false,
        configurable: true
    });
    persona.prototype.toString = function () {
        return "Nombre: " + this._nombre + "\n" +
            "Apellidos: " + this._apellidos + "\n" +
            "DNI: " + this._DNI + "\n" +
            "Cumpleaños: " + this._cumple.getDate() + "/" + this._cumple.getMonth() + "/" + this._cumple.getFullYear() + "\n" +
            "Edad: " + this._edad + "\n" +
            "Color Favorito: " + this._colorFavorito + "\n" +
            "Sexo: " + this._sexo + "\n" +
            "Direccion: " + this._direccion + "\n" +
            "Mail: " + this._mail + "\n" +
            "Teléfono: " + this._telefono + "\n" +
            "Notas: " + this._notas + "\n";
    };
    return persona;
}());
exports.persona = persona;
