import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";

export class persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _DNI: string;
    private _cumple: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direccion: Direccion;
    private _mail: Mail;
    private _telefono: Telefono;
    private _notas: string;



    constructor(nombre: string, apellidos: string, edad: number, DNI: string, cumple: Date, colorFavorito: string, sexo: string, direccion: Direccion, mail: Mail, telefono: Telefono, notas: string) {
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

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }

    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get DNI(): string {
        return this._DNI;
    }

    public set DNI(value: string) {
        this._DNI = value;
    }

    public get Edad(): number {
        return this._edad;
    }

    public set Edad(value: number) {
        this._edad = value;
    }

    public get cumple(): Date {
        return this._cumple;
    }

    public set cumple(value: Date) {
        this._cumple = value;
    }

    public get colorFavorito(): string {
        return this._colorFavorito;
    }

    public set colorFavorito(value: string) {
        this._colorFavorito = value;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public set sexo(value: string) {
        this._sexo = value;
    }

    public get Notas(): string {
        return this._notas;
    }

    public set Notas(value: string) {
        this._notas = value;
    }

    public get Direccion(): Direccion {
        return this._direccion;
    }

    public set Direccion(value: Direccion) {
        this._direccion = value;
    }

    public get telefono(): Telefono {
        return this._telefono;
    }

    public set telefono(value: Telefono) {
        this._telefono = value;
    }

    public get mail(): Mail {
        return this._mail;
    }

    public set mail(value: Mail) {
        this._mail = value;
    }

    public toString(): string {

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
    }

}


