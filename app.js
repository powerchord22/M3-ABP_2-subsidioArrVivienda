
// El estado de Chile posee un beneficio denominado “Subsidio de arriendo de vivienda”, el cual 
// consiste en un aporte mensual de 4,2 Unidades de Fomento (UF) por un máximo de 170 UF, el cual 
// podrá ser utilizado de manera consecutiva o fragmentada en un plazo de 8 años. Para optar a este 
// beneficio, se debe cumplir lo siguiente: 
 
// ● Ser mayor de 18 años al momento de postular. 
// ● Contar con cédula de identidad vigente. Las personas extranjeras deben presentar cédula 
// de identidad para extranjeros. 
// ● Acreditar ahorro mínimo de 4 UF al momento de postular, en una cuenta de ahorro para la 
// vivienda a nombre del postulante, su cónyuge o conviviente civil. 
// ● Pertenecer hasta el  70%  más vulnerable de  la  población,  según  la  calificación 
// socioeconómica del Registro Social de Hogares. 
 
 
// ● Postular al menos con su cónyuge, conviviente civil, conviviente o hijo o hija. En el caso de 
// personas mayores de 60 años, no es necesario contar con núcleo familiar. 
// ● Acreditar que el monto total de ingresos del núcleo familiar está entre las 7 y 25 UF. 
// ● No  ser  propietario,  propietaria,  beneficiario  o  beneficiaria de otros programas 
// habitacionales del MINVU. 
// Requerimiento: 
// En este ejercicio debes crear una pieza de código en JavaScript que permita saber si una persona 
// puede optar al beneficio 

const edad=document.getElementById("edad")
const ruts=document.getElementById("rutVigente")
const porc=document.getElementById("porcentaje")
const cred= document.getElementById("credito")
const prop=document.getElementById("propiedad")
const ahorro= document.getElementById("ahorro")
var rutValido;
var porcentajeValido;
var creditoValido;
var propiedadValida;
function rut(){
    if (ruts.value==2 ||ruts.value ==1){
        return rutValido= true
    }
    else  return rutValido =false
}
function porcentaje (){
    if ( porc.value > 0 && porc.value< 8 ){
        return porcentajeValido = true
    }
    else return alert("porcentaje no valido")
}
function creditar(){
    if (cred.value==1){
        return creditoValido=true
    }
    else return alert("No es una dirección")
}
function propiedad(){
    if (prop.value==2){
        return propiedadValida=true
    }
    else return alert("No puede Postular ")
}
function terminosContrato(){
    document.getElementById("botton").disabled= false
}
function postulacionMinvu(){
    if (edad.value > 17 && rutValido == true && porcentajeValido==true && creditoValido==true && propiedadValida==true && ahorro.value > 3){
        alert("puede postular")
    }
    else return alert("No puede postular")
}

