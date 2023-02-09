//EJERCICIO: Eju3e10_window
//Crea un programa que tenga botones para permitir modificar las siguientes propiedades de una ventana:
//Abrir una ventana nueva:
//Debes preguntar al usuario si está de acuerdo o no, y solo si aceptase abrirá la nueva ventana.
//La nueva ventana tendrá las siguientes propiedades: no tendrá barra de herramientas, ni location, ni barra de menú, ni será redimensionable. Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
//La nueva ventana incluirá un pequeño texto y un botón queal hacer clic cerrará la ventana.
//Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
//Mover la ventana 10 píxeles a la derecha y abajo.
//Mover la ventana a la posición 100,100.
//Aumentar el tamaño de la ventana 10 píxeles de ancho y largo.
//Aumentar el tamaño de la ventana a 400x200.
//Colocar el scroll de la ventana arriba del todo
//Colocar el scroll de la ventana a 10 píxeles de la parte superior.
//Todos los botones, excepto el primero y el segundo, los puedes programar diréctamente mediante la propiedad onClick, por ejemplo:
//<input type=“button” value=“Imprimir” onClick=“print()”/>
//Recuerda que no es necesario utilizar “window” delante de la propiedad.

let myWindow;

function openWindow() {
  let agree = confirm("Do you agree to open a new window?");
  if (agree) {
    myWindow = window.open(
      "",
      "",
      "toolbar=no,location=no,menubar=no,resizable=no,width=200,height=80,left=500,top=500"
    );
    myWindow.document.write(
      "<h3>Window Created</h3><br><button onclick='window.close()'>Close Window</button>"
    );
  }
}

function closeWindow() {
  if (!myWindow) {
    alert("Window is already closed");
  } else {
    myWindow.close();
  }
}

function moveWindowRightDown() {
  myWindow.moveBy(10, 10);
}

function moveWindowTo100x100() {
  myWindow.moveTo(100, 100);
}

function increaseWindowSize10() {
  myWindow.resizeBy(10, 10);
}

function increaseWindowSizeTo400x200() {
  myWindow.resizeTo(400, 200);
}

function scrollToTop() {
  myWindow.scrollTo(0, 0);
}

function scroll10FromTop() {
  myWindow.scrollBy(0, 10);
}
