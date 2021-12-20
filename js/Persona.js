/**
 * Clase Persona
 */
export default class Persona {
    /**
     * @description Método constructor
     * @param {String} nombre - Nombre de pila
     * @param {String} apellidos - Apellidos
     */
    constructor(nombre, apellidos) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._cargo = "";
        this._info = "Sin información";
        this._email = "";
        this._fechaNacimiento = new Date();// sin parametros mete la fecha
        // actual del sistema
    }


    /**
     * @description Método que saca en lista desordenada de HTML información de la persona
     * @returns {string} - Info de los campos de la persona
     */
    toString() {
        const datos = `
        <ul class="campos">
            <li class="campo">
            <mark>Nombre:</mark><em>${this._nombre}</em>
            </li>
            <li class="campo">
            <mark>Apellidos:</mark><em>${this._apellidos}</em>
            </li>
            <li class="campo">
            <mark>Email:</mark><em>${this._email}</em>
            </li>
            <li class="campo">
            <mark>Fecha de nacimiento:</mark><em>${this._fechaNacimiento}</em>
            </li>
            <li class="campo">
            <mark>Cargo:</mark><em>${this._cargo}</em>
            </li>
            <li class="campo">
            <mark>Info:</mark><em>${this._info}</em>
            </li>
        </ul>
        `;

        return datos;
    }
}