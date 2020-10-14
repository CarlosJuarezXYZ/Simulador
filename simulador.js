

class usuario {
    constructor(nombres, paterno, materno, dni, genero, celular, correo, ciudad, distrito, autorizo, noAutorizo) {
        this.nombres = nombres;
        this.paterno = paterno;
        this.materno = materno;
        this.dni = dni;
        this.genero = genero;
        this.celular = celular;
        this.correo = correo;
        this.ciudad = ciudad;
        this.distrito = distrito;
        this.autorizo = autorizo;
        this.noAutorizo = noAutorizo;

    }
}


/*

var usuario_1 = new usuario(nombres, paterno, materno, dni, genero, celular, correo, ciudad, distrito, autorizo, noAutorizo);


console.log(usuario_1);

*/

var nombres = document.getElementById("nombres");
var paterno = document.getElementById("paterno");
var materno = document.getElementById("materno");
var dni = document.getElementById("dni");
var genero = document.getElementById("genero");
var celular = document.getElementById("celular");
var correo = document.getElementById("correo");
var ciudad = document.getElementById("ciudad");
var distrito = document.getElementById("distrito");
var autorizo = document.getElementById("autorizo");
var noAutorizo = document.getElementById("no_autorizo");
var boton = document.getElementById("boton");
var formulario = document.getElementById("formulario");
var elementos = formulario.elements;
var titulo_login = document.getElementById("titulo_login ");


var validarNombres = function(e) {

    if (nombres.value == "") {
        nombres.classList.remove('nombres');
        nombres.classList.add('nombres_error');
        nombres.classList.add('nombres_error::placeholder');
        nombres.placeholder = "COMPLETA EL CAMPO NOMBRE POR FAVOR";
        e.preventDefault();
    }

}


var validarPaterno = function(e) {
    if (paterno.value == "") {
       paterno.classList.remove('paterno');
       paterno.classList.add('paterno_error');
       paterno.classList.add('paterno_error::placeholder');
       paterno.placeholder = "PATERNO VACIO";
        e.preventDefault();
    }
}

var validarMaterno = function(e) {
    if (materno.value == "") {
        materno.classList.remove('materno');
        materno.classList.add('materno_error');
        materno.classList.add('materno_error::placeholder');
        materno.placeholder = "MATERNO VACIO";
        e.preventDefault();
    }
}


var validardni = function(e) {

    if (dni.value.length > 8 || dni.value.length < 8 || dni.value == "") {
        dni.classList.remove('DNI');
        dni.classList.add('DNI_error');
        dni.classList.add('DNI_error::placeholder');
        dni.placeholder = "DNI VACIO";
        e.preventDefault();
    }
}

var validarCelular = function(e) {
    if (celular.value.length > 9 || celular.value.length < 9 || celular.value == "") {
        celular.classList.remove('celular');
        celular.classList.add('celular_error');
        celular.classList.add('celular_error::placeholder');
        celular.placeholder = "CELULAR VACIO";
        e.preventDefault();
    }
}


var validaGenero =function(e){
    if(genero.value==""){
        genero.classList.remove('genero');
        genero.classList.add('genero_error');
        genero.classList.add('genero_error::placeholder');
        genero.placeholder="GENERO VACIO";
        e.preventDefault();
    }
}

var validarCorreo = function(e) {
    if (correo.value == "" || /\S+@\S+\.\S+/.test(correo)) {
        correo.classList.remove('correo');
        correo.classList.add('correo_error');
        correo.classList.add('correo_error::placeholder');
        correo.placeholder="CORREO VACIO";
        e.preventDefault();
    }

}


var validarCiudad = function(e) {
    if (ciudad.value == "") {
        ciudad.classList.remove('ciudad');
        ciudad.classList.add('ciudad_error');
        ciudad.classList.add('ciudad_error::placeholder');
        ciudad.placeholder="CIUDAD VACIO";
        e.preventDefault();
    }

}

var validarDistrito = function(e) {
    if (distrito.value == "") {
        distrito.classList.remove('distrito');
        distrito.classList.add('distrito_error');
        distrito.classList.add('distrito_error::placeholder');
        distrito.placeholder="DISTRTITO VACIO";
        e.preventDefault();
    }

}



var validarAutorizacion = function(e) {
    if (autorizo.checked == false && noAutorizo.checked == false) {
        console.log("Define tu autorizacion de datos");
        e.preventDefault();
    } else if (autorizo.checked == true) {
        noAutorizo.checked == false;
    } else {
        noAutorizo.checked == true;
        autorizo.checked == false;
    }

}

function Autorizo1() {

    autorizo.disabled = true;
    noAutorizo.disabled = false;

}

function noAutorizo2() {
    noAutorizo.disabled = true;
    autorizo.disabled = false;

}

autorizo.addEventListener("click", Autorizo1);
noAutorizo.addEventListener("click", noAutorizo2);



var validarUsuario = function(e) {
    validarNombres(e);
    validarPaterno(e);
    validarMaterno(e);
    validardni(e);
    validarCelular(e);
    validarCorreo(e);
    validarCiudad(e);
    validarDistrito(e);
    validarAutorizacion(e);
    validaGenero(e);



    nombres = nombres.value;
    paterno = paterno.value;
    materno = materno.value;
    dni = dni.value;
    genero = genero.value;
    celular = celular.value;
    correo = correo.value;
    ciudad = ciudad.value;
    distrito = distrito.value;


    if (!autorizo.checked && !noAutorizo.checked) {
        autorizo = false;
        noAutorizo = false;
    } else {
        autorizo = !autorizo.disabled;
        noAutorizo = !noAutorizo.disabled;

    }

    e.preventDefault();

    var usuario_1 = new usuario(nombres, paterno, materno, dni, genero, celular, correo, ciudad, distrito, autorizo, noAutorizo);
    console.log(usuario_1);
    localStorage.setItem("PrimerUsuario", JSON.stringify(usuario_1));


}

/*   se trabajara esta validaciona a futuro 
var validarTitulo = function(e){
    if(validarUsuario=false){
        titulo_login.classList.add(".titulo_login_error");
    }
}

*/



boton.addEventListener("click", validarUsuario);


/*------------------------------SIMULADOR------------------------------------------------------*/



/* monto y cuotas que seran usados como ejemplo  */

var tasaInteres = 0.0095;  /* la tasa de interese se manejara de manera mensual */
var tasaInteresAnual = tasaInteres * 12;

var monto = document.getElementById("monto")
var cuotas = document.getElementById("cantidad_cuotas")
var simular = document.getElementById("simular");


var validar_monto = function(e){
    if(monto.value==""){
        monto.classList.remove('cantidad');
        monto.classList.add('cantidad_error');
        monto.classList.add('cantidad_error::placeholder');
        monto.placeholder = "COLOCAR EL MONTO POR FAVOR";
        e.preventDefault();
    }
}


var validar_cuotas = function(e){
    if(cuotas.value==""){
        cuotas.classList.remove('CantidadCuotas');
        cuotas.classList.add('CantidadCuotas_error');
        cuotas.classList.add('CantidadCuotas_error::placeholder');
        cuotas.placeholder = "COLOCA TUS CUOTAS POR FAVOR";
        e.preventDefault();
    }
}


class prestamos {
    constructor(monto, cuotas) {
        this.monto = monto;
        this.cuotas = cuotas;
    }

    valorDeCuota() {

        var tasaInteres = 0.0095; /* la tasa de interese se manejara de manera mensual */

        var cuotaMensual_uno = monto * tasaInteres;

        var cuotaMensual_dos = 1 - (Math.pow((1 / (1 + tasaInteres)), cuotas));

        var cuotaMensual = cuotaMensual_uno / cuotaMensual_dos;

        cuotaMensual = cuotaMensual.toFixed(2);

        return cuotaMensual;
    }

}

var validarSimulardor=function(e){
    validar_monto(e);
    validar_cuotas(e);

    monto=monto.value;
    cuotas=cuotas.value;

    var prestamo = new prestamos(monto, cuotas);
    console.log(prestamo);
    console.log(prestamo.valorDeCuota());
    localStorage.setItem("PrimerPrestamo",JSON.stringify(prestamo));

    e.preventDefault();
   
}

simular.addEventListener("click",validarSimulardor);



