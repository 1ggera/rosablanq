/*selecciona el id de 'btn' y ejecute una función en el evento 'click'+'nombredelafunción*/
document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click", register);
/*indica que detecte el evento resize y ejecute la función anchodepagina*/
window.addEventListener("resize", anchodePagina);

/*declaración de variables para manejar en las funciones*/
var container_login_register = document.querySelector(".container_login_register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var back_box_login = document.querySelector(".back_box_login");
var back_box_register = document.querySelector(".back_box_register");

function anchodePagina()
{
  if(window.innerWidth > 850)
  {
    back_box_login.style.display = "block";
    back_box_register.style.display = "block";
  }
  else
  {
    back_box_register.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";
    container_login_register.style.left = "0px";
  }
}

/*enviamos a ejecutar la funcion desde cuando uno recarga la pagina para acomodar las cajas*/
//anchodePagina();
/*para ocultar el formularios login y registro*/
function iniciarSesion()
{ 
  if(window.innerWidth > 850)
  {
    formulario_register.style.display = "none";
    container_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.opacity = "0";
  }
  else
  {
    formulario_register.style.display = "none";
    container_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    back_box_register.style.display = "block";
    back_box_login.style.display = "none";
  }
}

function register()
{ 
  if(window.innerWidth > 850)
  {
    formulario_register.style.display = "block";
    container_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    back_box_register.style.opacity = "0";
    back_box_login.style.opacity = "1";
  }
  else
  {
    formulario_register.style.display = "block";
    container_login_register.style.left = "0";
    formulario_login.style.display = "none";
    back_box_register.style.display = "none";
    back_box_login.style.display = "block";
    back_box_login.style.opacity = "1";
  }
}

/*funciones de botones ingresar y registrar*/
function registration()
{
  let email = document.getElementById('email_registration').value;
  let password = document.getElementById('pass_registration').value;
//SCRIPT PARA REGISTRAR NUEVOS USUARIOS autenticación>web>comenzar>registra usuarios nuevos)
  
}
