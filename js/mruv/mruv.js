'use strict'

/**
 * 
 * @returns FUNCIONES DE DISTANCIA
 */
async function distancia(){
    let velocidad_inicial = document.getElementById("txtVelocidadInicial").value;
    let velocidad_final = document.getElementById("txtVelocidadFinal").value;
    let tiempo = document.getElementById("txtTiempo").value;
    let aceleracion = document.getElementById("txtAceleracion").value;
    let parametros = 0;

    if(velocidad_inicial >= 0){
        parametros++;
    }
    if(velocidad_final > 0){
        parametros++;
    }
    if(tiempo > 0){
        parametros++;
    }
    if(aceleracion > 0){
        parametros++;
    }
    if(parametros <=2){
        alert(`Son necesarios al menos 3 parámetros.\n Parámetros ingresados: ${parametros}`)
        return;
    }

    if(velocidad_inicial>=0 && tiempo >0 && aceleracion >0){
        let resultado = await distancia_sin_vf(velocidad_inicial,tiempo,aceleracion);
        alert(resultado);
        resultado = parseFloat(resultado).toFixed(2);

        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${resultado} metros</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad = ${velocidad} m/s</li>
            <li>Tiempo = ${tiempo} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Según ecuación se deben de sustituir los valores de cada variable. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distancia = ${velocidad}m/s * ${tiempo}s</p><br>
        <p>3. Se realiza la operación y se elimina la dimensional de los segundos. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${velocidad} * ${tiempo} = ${resultado} | metros/<del>segundos</del> * <del>segundos</del></p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distancia = ${resultado} metros</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos
    }else{
        alert("Por favor ingrese un valor válido en los parámetros de la función.");
        return;
    }
}

async function distancia_sin_vf(velocidad_inicial,tiempo,aceleracion){
    let vo = parseInt(velocidad_inicial);
    let t = parseInt(tiempo);
    let a = parseInt(aceleracion);
    let d = (vo*t+(0.5*a*Math.pow(t,2)));
    return d;
}
async function distancia_sin_t(velocidad_final,velocidad_inicial,aceleracion){
    let vf = parseInt(velocidad_final);
    let vo = parseInt(velocidad_inicial);
    let a = parseInt(aceleracion);
    let d = ((Math.pow(vf,2)-(Math.pow(vo,2)))/(2*a));
    return d;
}
async function distancia_sin_a(velocidad_inicial,velocidad_final,tiempo){
    let vo = parseInt(velocidad_inicial);
    let vf = parseInt(velocidad_final);
    let t = parseInt(tiempo);
    let d = ((vo+vf)/2)*t;
    return d;
}

/**
 * FUNCIONES DE VELOCIDAD INICIAL
 * @returns 
 */

async function velocidad_inicial(){
let distancia = document.getElementById("txtDistancia").value;
let tiempo = document.getElementById("txtTiempo").value;
    if(distancia.length == 0){
        alert("Ingrese un valor en la distancia.");
        return;

    }
    if(tiempo.length == 0){
        alert("Ingrese un valor en el tiempo.");
        return;
    }
    if(distancia>= 0 && tiempo>0){
        let resultado = (distancia/tiempo);
        resultado = parseFloat(resultado).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${resultado} metros por segundo</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Distancia = ${distancia} m</li>
            <li>Tiempo = ${tiempo} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Según ecuación se deben de sustituir los valores de cada variable. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Velocidad = ${distancia}m / ${tiempo}s</p><br>
        <p>3. Se realiza la operación y se elimina la dimensional de los segundos. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${distancia} / ${tiempo} = ${resultado} | metros / segundos</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Velocidad = ${resultado} m/s</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos
    }else{
        alert("Por favor ingrese un valor válido en los parámetros de la función. El tiempo no puede ser 0");
        return;
    }
}

async function vo_sin_t(velocidad_final,aceleracion,distancia){
    let vf = parseInt(velocidad_final);
    let a = parseInt(aceleracion);
    let d = parseInt(distancia);
    let vo = Math.sqrt((Math.pow(vf,2)-(2*a*d)));
    return vo;
  }
  async function vo_sin_d(velocidad_final,aceleracion,tiempo){
    let vf = parseInt(velocidad_final);
    let a = parseInt(aceleracion);
    let t = parseInt(tiempo);
    let vo = (vf-(a*t));
    return vo;
  }
  async function vo_sin_vf(aceleracion,distancia,tiempo){
    let a = parseInt(aceleracion);
    let d = parseInt(distancia);
    let t = parseInt(tiempo);
    let vo = ((d-((a * Math.pow(t,2))/2))/t);
    return vo;
  }

/**
 * FUNCIONES DE VELOCIDAD FINAL
 */

async function velocidad_final(){
    let velocidad_inicial = document.getElementById("txtVelocidadInicial").value;
    let distancia = document.getElementById("txtDistancia").value;
    let aceleracion = document.getElementById("txtAceleracion").value;
    let tiempo = document.getElementById("txtTiempo").value;

    if(velocidad_inicial>=0 && distancia>0 && aceleracion>0){
        let velocidad_final = await vf_sin_t(velocidad_inicial,distancia,aceleracion);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${velocidad_final} metros</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad Inicial = ${velocidad_inicial} m/s</li>
            <li>Distancia = ${distancia} s</li>
            <li>Aceleración = ${aceleracion} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        /**
         * REALIZAR OPERACIONES
         */
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición.</p>
        <p><ul><li>Vf = Vo + a*t</li></ul> </p>
        <p>3. Según ecuación se deben de sustituir los valores de cada variable. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Velocidad Final)^2 = (${velocidad_inicial} m/s)^2 + ( 2 * ${aceleracion} m/s^2 * ${distancia} m</p><br>
        <p>4. Se despeja la velocidad final y la ecuación es queda así. <br> <br></p>
        <img src=""> </img>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distancia = ${velocidad_final} metros</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos;
    }else if(velocidad_inicial>=0 && tiempo>0 && aceleracion>0){
      let velocidad_final = await vf_sin_d(velocidad_inicial,aceleracion,tiempo);
      document.getElementById("divResultados").style.display = "block";
      let htmlResult = `<b>${velocidad_final} metros</b>`;
      document.getElementById("h2resultado").innerHTML = htmlResult;
      let htmlVariables = `<li>Velocidad Inicial = ${velocidad_inicial} m/s</li>
          <li>Tiempo = ${tiempo} s</li>
          <li>Aceleración = ${aceleracion} s</li>
      `;
      document.getElementById("variables").innerHTML = htmlVariables;
      /**
       * REALIZAR OPERACIONES
       */
      let htmlPasos =`
      <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición.</p>
      <p><ul><li>Vf = Vo + a*t</li></ul> </p>
      <p>3. Según ecuación se deben de sustituir los valores de cada variable. <br> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Velocidad Final = ${velocidad_inicial} m/s + ( ${aceleracion} m/s^2 * ${tiempo} s)</p><br>
      <p>4. Se realiza la operación y se eliminan las dimensionales para dejar solamente metros sobre segundos. <br> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${velocidad_inicial} * ${tiempo} = ${velocidad_final} | metros/segundos</p>
      <p>Resultado: <br> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Velocidad Final = ${velocidad_final} m/s</p>`;
      document.getElementById("otrospasos").innerHTML = htmlPasos;
    }else{
        alert("Por favor ingrese un valor válido en los parámetros de la función");
    }
}

async function vf_sin_t(velocidad_inicial,distancia,aceleracion){
    let vo = parseInt(velocidad_inicial);
    let a = parseInt(aceleracion);
    let d = parseInt(distancia);
    let vf = Math.sqrt((Math.pow(vo,2)+2*(a*d)));
    return vf;
  }
  
  async function vf_sin_d(velocidad_inicial,aceleracion,tiempo){
    let vo = parseInt(velocidad_inicial);
    let a = parseInt(aceleracion);
    let t = parseInt(tiempo);
    let vf = vo+(a*t);
    return vf;
  }

/**
 * FUNCIONES DE TIEMPO
 * @returns 
 */

async function tiempo(){
    let distancia = document.getElementById("txtDistancia").value;
    let velocidad = document.getElementById("txtVelocidad").value;
        if(distancia.length == 0){
            alert("Ingrese un valor en la distancia.");
            return;
    
        }
        if(velocidad.length == 0){
            alert("Ingrese un valor en la velocidad.");
            return;
        }
        if(distancia>= 0 && velocidad>0){
            let resultado = (distancia/velocidad);
            resultado = parseFloat(resultado).toFixed(2);
            document.getElementById("divResultados").style.display = "block";
            let htmlResult = `<b>${resultado} segundos</b>`;
            document.getElementById("h2resultado").innerHTML = htmlResult;
            let htmlVariables = `<li>Distancia = ${distancia} m</li>
                <li>Velocidad = ${velocidad} s</li>
            `;
            document.getElementById("variables").innerHTML = htmlVariables;
            let htmlPasos =`
            <p>2. Según ecuación se deben de sustituir los valores de cada variable. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tiempo = ${distancia}m / ${velocidad}s</p><br>
            <p>3. Se realiza la operación y se elimina la dimensional de los segundos. <br> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${distancia} / ${velocidad} = ${resultado} | <del>metros</del> / <del>metros</del>/segundos</p>
            <p>Resultado: <br> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tiempo = ${resultado} s</p>`;
            document.getElementById("otrospasos").innerHTML = htmlPasos
        }else{
            alert("Por favor ingrese un valor válido en los parámetros de la función. La velocidad no puede ser 0");
            return;
        }
}

async function tiempo_mruv(velocidad_final,velocidad_inicial,aceleracion){
    let vf = parseInt(velocidad_final);
    let vo = parseInt(velocidad_inicial);
    let a = parseInt(aceleracion);
    let t = ((vf-vo)/a);
    return t;
  }

/**
 * FUNCIONES DE ACELERACION
 */

async function aceleracion(){

}

async function aceleracion_sin_d(velocidad_final,velocidad_inicial,tiempo){
    let vo = parseInt(velocidad_inicial);
    let vf = parseInt(velocidad_final);
    let t = parseInt(tiempo);
    let aceleracion = ((vf-vo)/t);
    return aceleracion;
  }
  
async function aceleracion_sin_t(velocidad_final,velocidad_inicial,distancia){
    let vo = parseInt(velocidad_inicial);
    let vf = parseInt(velocidad_final);
    let d = parseInt(distancia);
    let aceleracion = ((Math.pow(vf,2)-Math.pow(vo,2))/(2*d));
    return aceleracion;
  }
  
async function aceleracion_sin_vf(velocidad_inicial,distancia,tiempo){
    let vo = parseInt(velocidad_inicial);
    let d = parseInt(distancia);
    let t = parseInt(tiempo);
    let aceleracion = (((d-(vo*t))*2)/Math.pow(t,2));
    return aceleracion;
  }

