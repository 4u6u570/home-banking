
//Declaración de variables
var nombreUsuario = "Augusto Salazar";
var saldoCuenta = 50000;
var limiteExtraccion = 10000;
//Servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
//Cuentas Amigas
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
// Contraseña/Password
var password = 32804;
// Login
iniciarSesion();

//////////////////////////////////////////////
///////FUNCIONES CREADAS POR MI //////////////
//////////////////////////////////////////////

function restarDinero(dinero) {
  saldoCuenta -= parseInt(dinero); //saldoCuenta -= parseInt(dinero);
}

function sumarDinero(dinero) {
  saldoCuenta = parseInt(dinero) + saldoCuenta; //saldoCuenta += parseInt(dinero);
}

function evitarExtraccion(dinero) { // Función llamada por extraerDinero()
  var confirmacionExtraccion;
  if (dinero > saldoCuenta) {
    alert("Dinero insuficiente.");
    return false;
  } else if (dinero > limiteExtraccion) {
    alert("No puede superar el límite de extracción");
    return false;
  } else if ((dinero % 100) != 0) {
    alert("No es un billete de 100.");
    return false;
  } else {
    alert("La extracción se realizó correctamente.");
    return true;
  }
}

function evitarDeposito(dinero) {  // Función llamada por depositarDinero()
  var confirmacionDeposito;
  if (dinero < saldoCuenta) {
    return true;
  } else if (isNaN(dinero) + dinero == null + dinero == "") {
    alert("Por favor ingrese solo números enteros y sin caracteres.");
    return false;
  } else if ((dinero % 100) != 0) {
    alert("Por favor ingrese montos que sean múltiplos de 100.");
    return false;
  } else {
    alert("El depósito se realizó correctamente.");
    return true;
  }
}

function noEsUnNumero(dinero) {  //Evita que se parsee un número junto a una string (ejemplo "100asdf")
  if (isNaN(dinero) || dinero == null || dinero == "" || parseInt(dinero) < 0) {
    return true;
  }
  return false;
}

function restarDineroServicio(servicio) { //Función de resta para pagarServicio
  if (saldoCuenta - servicio) {
  };
}

function tengoSaldo(monto) { // Evita saldos negativos al realizar pagos cuando el saldo no es suficiente.
  if (saldoCuenta > parseInt(monto)) {
    return true;
  }
  return false;
}

function cuentaAmiga(verificarCuentaAmiga) { // Función para verificar si una cuenta es amiga.
  var verificarCuentaAmiga = prompt(cuentaAmiga1);

  if (verificarCuentaAmiga == cuentaAmiga1) {
    return true;
  } else if (verificarCuentaAmiga == cuentaAmiga2) {
    return true;
  } else {
    alert("El número ingresado no corresponde a una cuenta amiga");
  }
}

function validarCuentaAmiga(numeroCuentaAmiga) { // Valida si una cuenta es o no "amiga".
  if (numeroCuentaAmiga == cuentaAmiga1 || numeroCuentaAmiga == cuentaAmiga2) {
    return true;
  }
  return false;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

window.onload = function () {
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
  var ingresarLimite = prompt("Ingrese un nuevo límite de extracción");
  if (!noEsUnNumero(ingresarLimite)) {
    if (ingresarLimite % 100 == 0) {
      alert("Ha modificado el límite de extracción exitosamente. \nTu nuevo límite es $" + ingresarLimite);
      limiteExtraccion = ingresarLimite;
      actualizarLimiteEnPantalla();
    } else {
      alert("Por favor ingrese montos que sean múltiplos de 100");
    }
  } else if (ingresarLimite == "") {
    alert("La opción ingresada es incorrecta.");
  }
}

/////////////Extracciones

function extraerDinero() {
  let dinero = prompt("¿Cuánto desea extraer?");
  let saldoAnterior = saldoCuenta;
  if (dinero != null) {
    if (!noEsUnNumero(dinero)) {
      if (evitarExtraccion(dinero) == true) {
        restarDinero(dinero);
        alert("Ha extraido $" + dinero + "\nSaldo Anterior $" + saldoAnterior + "\nSaldo Actual $" + saldoCuenta);
        actualizarSaldoEnPantalla();
      }
    } else {
      alert("No ingresó un caracter válido.");
    }
  } /*else {
    alert("Se canceló la operación");
  }*/
}

//////////////Depósitos

function depositarDinero() {
  let saldoAnterior = saldoCuenta;
  let dinero = prompt("¿Cuánto desea depositar?");
  if (dinero != null) {
    if (noEsUnNumero(dinero) || (dinero % 100) != 0) {
      alert("Por favor ingrese solo números enteros y sin caracteres.");
    } else {
      dinero = parseInt(dinero);
      if (evitarDeposito(dinero) == true) {
        sumarDinero(dinero);
        alert("Ha depositado $" + dinero + "\nSaldo Anterior $" + saldoAnterior + "\nSaldo Actual $" + saldoCuenta);
        actualizarSaldoEnPantalla();
      }
    }
  }
}

/////////////// Pago de servicios

function pagarServicio() {
  let saldoAnterior = saldoCuenta;
  let servicios = prompt("¿Qué servicio desea pagar? \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Teléfono");

  if (servicios != null && servicios != "") {
    switch (servicios) {
      case "1": //// AGUA
        if (tengoSaldo(agua) == true) { /// Trae tengoSaldo si es true.
          restarDinero(agua);
          alert("Ha pagado $" + agua + " correspondiente al servicio de Agua." + "\nSaldo Anterior $" + saldoAnterior + "\nSaldo Actual $" + saldoCuenta);

        } else {
          alert("Su saldo es insuficiente.");
        }
        break;
      case "2": //// LUZ
        if (tengoSaldo(luz) == true) {
          restarDinero(luz);
          alert("Ha pagado $" + luz + " correspondiente al servicio de Agua." + "\nSaldo Anterior $" + saldoAnterior + "\nSaldo Actual $" + saldoCuenta);

        } else {
          alert("Su saldo es insuficiente.");
        }
        break;
      case "3": //// INTERNET
        if (tengoSaldo(internet) == true) {
          restarDinero(internet);
          alert("Ha pagado $" + internet + " correspondiente al servicio de Agua." + "\nSaldo Anterior $" + saldoAnterior + "\nSaldo Actual $" + saldoCuenta);

        } else {
          alert("Su saldo es insuficiente.");
        }
        break;
      case "4": //// TELÉFONO
        if (tengoSaldo(telefono) == true) {
          restarDinero(telefono);
          alert("Ha pagado $" + telefono + " correspondiente al servicio de Agua." + "\nSaldo Anterior $" + saldoAnterior + "\nSaldo Actual $" + saldoCuenta);

        } else {
          alert("Su saldo es insuficiente.");
        }
        break;

      default:
        alert("No existe el servicio seleccionado.");
        break;
    }
    actualizarSaldoEnPantalla();

  } else if (servicios == "") { // Click en Aceptar: Alerta | Cancelar: sin acción.
    alert("La opción ingresada es incorrecta.");
  }
}

///////// Transferencias

function transferirDinero() {
  var montoTransferencia;
  var numeroCuentaAmiga;

  montoTransferencia = prompt("Por favor ingrese el monto a transferir");
  if (montoTransferencia != null) {
    if (!noEsUnNumero(montoTransferencia)) {
      if (tengoSaldo(montoTransferencia)) {
        numeroCuentaAmiga = prompt("Ingresar número de cuenta amiga");
        if (validarCuentaAmiga(numeroCuentaAmiga) == true) {
          restarDinero(montoTransferencia);
          actualizarSaldoEnPantalla();

          alert("La transferencia se realizó exitosamente. \nSe han transferido $" + montoTransferencia + " a su cuenta amiga Nº " + numeroCuentaAmiga + ".");
        } else {
          alert("El número ingresado no corresponde a una cuenta amiga.");
        }
      } else {
        alert("Su saldo es insuficiente para realizar esta operación")
      }
    } else {
      alert("No ingresó un número.");
    }
  }
}

function verificarPasword(numero) {
  if (numero == password) {
    return true;
  }
  return false;
}

function iniciarSesion() {
  var ingresarPassword;

  ingresarPassword = parseInt(prompt("Por favor ingrese su contraseña."));
  if (verificarPasword(ingresarPassword)) {
    alert("Bienvenido/a " + nombreUsuario + ". \nHa ingresado correctamente a su cuenta.");
  } else {
    alert("La contraseña es incorrecta. Se ha denegado el ingreso al sistema.");
    saldoCuenta = 0;
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML = "Su límite de extracción es: $" + limiteExtraccion;
}