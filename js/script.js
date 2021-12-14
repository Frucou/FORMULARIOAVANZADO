"use strict";

import { clearBlankSpaces } from "./functions.js";


// Nodos
const form = document.querySelector("#myForm");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellidos");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
const cargoInput = document.getElementById("cargo");
const otrosInput = document.getElementById("otros");
const out = document.querySelector(".out");
const outData = document.querySelector(".out__data");
const recargar = document.getElementById("trocea");
const outAlert = document.querySelector(".alert");
const altaInput = document.getElementById("alta");
const modificarInput = document.getElementById("baja");


// Funciones

/**
 * @description Función que valida el formulario
 * @returns {Boolean} 
 */
const validar = () => { // definición de la función
    const expReg = /^\s*$/; // expresión regular de tipo objeto que busca
    // espacios en blanco
    let nombre = clearBlankSpaces(nombreInput.value);
    let apellido = clearBlankSpaces(apellidoInput.value);
    // validamos nombre
    if (expReg.test(nombre)) {
        outAlert.innerHTML = "<div role=\"alert\" id=\"error-nombre\" class=\"alert alert-danger\">El nombre no puede estar en blanco.</div>";
        nombreInput.focus();
        return false;
    }
    // validamos apellido
    if (expReg.test(apellido)) {
        outAlert.innerHTML = "<div role=\"alert\" id=\"error-apellidos\" class=\"alert alert-danger\">El apellido no puede estar en blanco.</div>";
        apellidoInput.focus();
        return false;
    }
    // validamos correo
    if (expReg.test(emailInput.value)) {
        outAlert.innerHTML = "<div role=\"alert\" id=\"error-email\" class=\"alert alert-danger\">El coreo no puede estar en blanco.</div>";
        emailInput.focus();
        return false;
    }

    return true;
}



// Eventos
form.addEventListener(
    "submit",
    ev => {
        ev.preventDefault();

        // limpio el alert
        outAlert.innerHTML = '';

        /* Creo dos variables para guardar el valor de los imputs,
            deben ser variables locales para el correcto funcionamiento
            del programa */


        if (validar()) {
            if (altaInput.checked) {
                alert("Dado de alta");
            } else {
                alert("Modificaco");
            }
        }

            // msg(
            //     `<br>${prueba}</br>`, ev.target.parentElement
            // );

            outData.innerHTML = `${nombre} 
        <br>${apellido}</br>
        <br>${emailInput.value}</br>
        <br>${dateInput.value}</br>
        <br>${cargoInput.value}</br>
        <br>${otrosInput.value}</br>
        `;

            // console.log(nombre);
            // console.log(apellido);
            console.log(emailInput.value);
            console.log(dateInput.value);
            console.log(cargoInput.value);
            console.log(otrosInput.value);
        }
);


// recargar.addEventListener(
//     "submit",
//     alert("epa")
// );