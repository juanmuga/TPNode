$(document).ready(function() {
  $("boton-crear").click(function() {
    var data = [];
    var inputCrear = document.getElementById("#inputBox").value;
    var data = data.push(inputCrear);
    var inputCrear = clear();

   $( "boton-crear" ).append( document.createTextNode( "" ) );

    

  });
});

// hacer que al poner crear tome el array y lo ponga en un array que despues se va a guardar en un nuevoDato que va a tomar ajax para mandar al server