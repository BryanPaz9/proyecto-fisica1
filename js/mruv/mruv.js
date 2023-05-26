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
    // let parametros = 0;

    // if(velocidad_inicial >= 0){
    //     parametros++;
    // }
    // if(velocidad_final > 0){
    //     parametros++;
    // }
    // if(tiempo > 0){
    //     parametros++;
    // }
    // if(aceleracion > 0){
    //     parametros++;
    // }
    // if(parametros <=2){
    //     alert(`Son necesarios al menos 3 parámetros.\n Parámetros ingresados: ${parametros}`)
    //     return;
    // }

    if(velocidad_inicial>=0 && tiempo >0 && aceleracion >0){
        let distancia = await distancia_sin_vf(velocidad_inicial,tiempo,aceleracion);
        // resultado = parseFloat(resultado).toFixed(2);

        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${distancia} metros</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad inicial = ${velocidad_inicial} m/s</li>
            <li>Tiempo = ${tiempo} s</li>
            <li>Aceleración = ${aceleracion} m/s^2</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. <br>
        <ul><li>d = Vo*t + 1/2 at^2</li></ul>
        </p><br>
        <p>3. Se sustituyen los valores de las variables y se realiza la operación eliminando las dimensionales para dejar el resultado en metros. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${velocidad_inicial} m/s * ${tiempo} s + 1/2 ${aceleracion} m/s^2 * (${tiempo} s)^2 = ${distancia} m</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distancia = ${distancia} metros</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos
    }else if(velocidad_final>0 && velocidad_inicial>=0 && aceleracion>0){
        let distancia = await distancia_sin_t(velocidad_final,velocidad_inicial,aceleracion);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${distancia} metros</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad inicial = ${velocidad_inicial} m/s</li>
            <li>Velocidad Final= ${velocidad_final} m/s</li>
            <li>Aceleración = ${aceleracion} m/s^2</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. <br>
        <ul><li>d = (Vf^2 - Vo^2)2a</li></ul>
        </p><br>
        <p>3. Se sustituyen los valores de las variables y se realiza la operación eliminando las dimensionales para dejar el resultado en metros. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ((${velocidad_final} m/s)^2 - (${velocidad_inicial} m/s)^2) /2 ${aceleracion} m/s^2 = ${distancia} m</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distancia = ${distancia} metros</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos
    }else if(velocidad_inicial>=0,velocidad_final>0,tiempo>0){
        let distancia = await distancia_sin_a(velocidad_inicial,velocidad_final,tiempo);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${distancia} metros</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad Inicial = ${velocidad_inicial} m/s</li>
            <li>Velocidad Final = ${velocidad_final} s</li>
            <li>tiempo = ${tiempo} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. <br>
        <ul><li>d = ((Vf + Vo)/2)*t</li></ul>
        </p><br>
        <p>3. Se sustituyen los valores de las variables y se realiza la operación eliminando las dimensionales para dejar el resultado en metros. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ((${velocidad_final} m/s + ${velocidad_inicial} m/s)/2)* ${tiempo} s = ${distancia} m</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distancia = ${distancia} metros</p>`;
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
let aceleracion = document.getElementById("txtAceleracion").value;
let velocidad_final = document.getElementById("txtVelocidadFinal").value;
    if(velocidad_final> 0 && aceleracion>0 && distancia >0){
        let velocidad_inicial = await vo_sin_t(velocidad_final,aceleracion,distancia);
        velocidad_inicial = parseFloat(velocidad_inicial).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${velocidad_inicial} metros por segundo</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad final = ${velocidad_final} m/s</li>
            <li>Aceleración = ${aceleracion} m/s^2</li>
            <li>Distancia = ${distancia} m</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición.</p>
        <p>Utilizaremos la fórmula de Velocidad final al cuadrado, pero debemos realizar un despeje.</p>
        <p><ul><li>Vf^2 = Vo^2 + 2ad</li></ul> </p>
        <p>3. Se despeja la velocidad inicial y la ecuación queda así. </p>
        <p> Vo = sqrt(Vf^2-2ad)</p>
        <small>sqrt = raíz cuadrada</small><br>
        <p>4. Se realiza la operación y se eliminan las dimensionales para dejar solamente metros sobre segundos. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Velocidad Inicial = sqrt((${velocidad_final} m/s)^2 - (2 * ${aceleracion} m/s^2 * ${distancia} m))</p><br>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Velocidad Inicial = ${velocidad_inicial} m/s</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos;
    }else if(velocidad_final>0 && aceleracion>0 && tiempo>0){
        let velocidad_inicial = await vo_sin_d(velocidad_final,aceleracion,tiempo);
        velocidad_inicial = parseFloat(velocidad_inicial).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${velocidad_inicial} metros por segundo</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad final = ${velocidad_final} m/s</li>
            <li>Aceleración = ${aceleracion} m/s^2</li>
            <li>Tiempo = ${tiempo} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición.</p>
        <p><ul><li>Vo = Vf - a*t</li></ul> </p>
        <p>3. Se realiza la operación y se eliminan las dimensionales para dejar solamente metros sobre segundos. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Velocidad Inicial = ${velocidad_final} m/s - (${aceleracion} m/s^2 * ${tiempo} s))</p><br>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Velocidad Inicial = ${velocidad_inicial} m/s</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos;
    }else if(aceleracion>0 && distancia> 0 && tiempo >0){
        let velocidad_inicial = await vo_sin_vf(aceleracion,distancia,tiempo);
        velocidad_inicial = parseFloat(velocidad_inicial).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${velocidad_inicial} metros por segundo</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad final = ${velocidad_final} m/s</li>
            <li>Aceleración = ${aceleracion} m/s^2</li>
            <li>Tiempo = ${tiempo} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. En este caso utilizaremos la fórmula de la distancia y despejaremos la velocidad inicial.</p>
        <p><ul><li>d = <b>Vo</b>*t + 1/2*a*t^2</li></ul> </p>
        <p>3. Se realiza el respectivo despeje y la fórmula nos queda de la siguiente manera.</p>
        <p><ul><li><b>Vo</b> = (d - 1/2*a*t^2)/t </li></ul> </p>
        <p>4. Se realiza la operación y se eliminan las dimensionales para dejar solamente metros sobre segundos. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Velocidad Inicial</b> = (${distancia} - 1/2*${aceleracion}*${tiempo}^2)/${tiempo} m/s</p><br>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Velocidad Inicial</b> = ${velocidad_inicial} m/s</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos;
    }else{
        alert("Por favor ingrese un valor válido en los parámetros de la función.");
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
        let htmlResult = `<b>${velocidad_final} metros por segundo</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad Inicial = ${velocidad_inicial} m/s</li>
            <li>Distancia = ${distancia} m</li>
            <li>Aceleración = ${aceleracion} m/s^2</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        /**
         * REALIZAR OPERACIONES
         */
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición.</p>
        <p><ul><li>Vf^2 = Vo^2 + 2a*d</li></ul> </p>
        <p>3. Se despeja la velocidad final y la ecuación queda así. </p>
        <p> Vf = sqrt(Vo^2 + 2 * a * d)</p>
        <small>sqrt() = raíz cuadrada</small>
        <p>4. Se realiza la operación y se eliminan las dimensionales para dejar solamente metros sobre segundos. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Velocidad Final = sqrt((${velocidad_inicial} m/s)^2 + (2 * ${aceleracion} m/s^2 * ${distancia} m))</p><br>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Velocidad Final = ${velocidad_final} m/s</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos;
    }else if(velocidad_inicial>=0 && tiempo>0 && aceleracion>0){
      let velocidad_final = await vf_sin_d(velocidad_inicial,aceleracion,tiempo);
      document.getElementById("divResultados").style.display = "block";
      let htmlResult = `<b>${velocidad_final} metros por segundo</b>`;
      document.getElementById("h2resultado").innerHTML = htmlResult;
      let htmlVariables = `<li>Velocidad Inicial = ${velocidad_inicial} m/s</li>
          <li>Tiempo = ${tiempo} s</li>
          <li>Aceleración = ${aceleracion} m/s^2</li>
      `;
      document.getElementById("variables").innerHTML = htmlVariables;
      /**
       * REALIZAR OPERACIONES
       */
      let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. <br>
        <ul><li>a = (Vf - Vo) / t</li></ul> <br></p>
        3. Según ecuación se deben de sustituir los valores de cada variable. <br> 
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
/**
 * FUNCIONES DE VELOCIDAD MEDIA
 */

async function velocidad_media(){
    let distancia_final = parseFloat(document.getElementById('txtDistanciaFinal').value);
    let distancia_inicial = parseFloat(document.getElementById('txtDistanciaInicial').value);
    let tiempo_final = parseFloat(document.getElementById('txtTiempoFinal').value);
    let tiempo_inicial = parseFloat(document.getElementById('txtTiempoInicial').value);
    if(tiempo_final == tiempo_inicial){
        alert("Los tiempos no pueden ser los mismos, ni el denominador puede ser 0");
        return;
    }else if(distancia_final<distancia_inicial){
        alert("Las distancia final no puede ser menor que la distancia inicial");
        console.log(distancia_final,distancia_inicial);
        return;
    }else{
        let velocidad_media = await vm(distancia_final,distancia_inicial,tiempo_final,tiempo_inicial);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${velocidad_media} metros por segundo</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Distancia final = ${distancia_final} m</li>
            <li>Distancia inicial = ${distancia_inicial} m</li>
            <li>Tiempo final = ${tiempo_final} s</li>
            <li>Tiempo inicial = ${tiempo_inicial} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>Utilizaremos la fórmula de la Velocidad Media.</p>
        <p>2. Se realiza la operación y se eliminan las dimensionales para dejar solamente metros sobre segundos. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Velocidad Media = (${distancia_final} m - ${distancia_inicial} m)/(${tiempo_final} s - ${tiempo_inicial} s) </p><br>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Velocidad Media = ${velocidad_media} m/s</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos;
    }
}

async function vm(distancia_final,distancia_inicial,tiempo_final,tiempo_inicial){
    let xf = parseFloat(distancia_final);
    let xo = parseFloat(distancia_inicial);
    let tf = parseFloat(tiempo_final);
    let to = parseFloat(tiempo_inicial);
    let vm = ((xf-xo)/(tf-to)).toFixed(2);
    return vm;
}

async function tiempo(){
    let aceleracion = document.getElementById("txtAceleracion").value;
    let velocidad_inicial = document.getElementById("txtVelocidadInicial").value;
    let velocidad_final = document.getElementById("txtVelocidadFinal").value;

        if(velocidad_final>= 0 && velocidad_inicial>0 && aceleracion){
            let tiempo = await tiempo_mruv(velocidad_final,velocidad_inicial,aceleracion);
            tiempo = parseFloat(tiempo).toFixed(2);
            document.getElementById("divResultados").style.display = "block";
            let htmlResult = `<b>${tiempo} segundos</b>`;
            document.getElementById("h2resultado").innerHTML = htmlResult;
            let htmlVariables = `<li>Velocidad inicial = ${velocidad_inicial} s</li>
                <li>Velocidad Final = ${velocidad_final} s</li>
                <li>Aceleración = ${aceleracion} m/s^2</li>
            `;
            document.getElementById("variables").innerHTML = htmlVariables;
            let htmlPasos =`
            <p>2. Según ecuación se deben de sustituir los valores de cada variable. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tiempo = (${velocidad_final}m/s - ${velocidad_inicial}m/s)/${aceleracion} m/s^2</p><br>
            <p>3. Se realiza la operación y se elimina la dimensional de los segundos. <br> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${velocidad_final} - ${velocidad_inicial}) / ${aceleracion} = ${tiempo} | segundos</p>
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
    let velocidad_inicial = document.getElementById("txtVelocidadInicial").value;
    let velocidad_final = document.getElementById("txtVelocidadFinal").value;
    let tiempo = document.getElementById("txtTiempo").value;
    let distancia = document.getElementById("txtDistancia").value;

    if(velocidad_final>0 && velocidad_inicial =="" && tiempo>0 && distancia>0){
        let aceleracion = await aceleracion_sin_vo(velocidad_final,tiempo,distancia);
        aceleracion = parseFloat(aceleracion).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${aceleracion} m/s^2</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad Final = ${velocidad_final} m/s</li>
            <li>Tiempo = ${tiempo} s</li>
            <li>Distancia = ${distancia} m</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. <br>
        <ul><li>a = -2(d-Vf*t)/t^2</li></ul> <br></p>
        <p>3. Según ecuación se deben de sustituir los valores de cada variable. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = (2(${distancia} m -(${velocidad_final} m/s * ${tiempo} s))) / (${tiempo} m/s^2)^2</p><br>
        <p>4. Se realiza la operación. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((-2(${distancia} -(${velocidad_final} * ${tiempo}))) / (${tiempo})^2 | m/s^2</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = ${aceleracion} m/s^2</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos

    }else if(velocidad_final>0 && velocidad_inicial >=0 && tiempo>0){
        let aceleracion = await aceleracion_sin_d(velocidad_final,velocidad_inicial,tiempo);
        aceleracion = parseFloat(aceleracion).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${aceleracion} m/s^2</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad inicial = ${velocidad_inicial} m/s</li>
            <li>Velocidad Final = ${velocidad_final} m/s</li>
            <li>Tiempo = ${tiempo} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. <br>
        <ul><li>a = (Vf - Vo) / t</li></ul> <br></p>
        <p>3. Según ecuación se deben de sustituir los valores de cada variable. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = (${velocidad_final}m/s - ${velocidad_inicial}m/s)/${tiempo} s</p><br>
        <p>4. Se realiza la operación. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${velocidad_final} - ${velocidad_inicial}) / ${tiempo} = ${aceleracion} | m/s^2</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = ${aceleracion} s</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos

    }else if(velocidad_final >0 && velocidad_inicial >=0 && distancia>0){
        let aceleracion = await aceleracion_sin_t(velocidad_final,velocidad_inicial,distancia);
        aceleracion = parseFloat(aceleracion).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${aceleracion} m/s^2</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad inicial = ${velocidad_inicial} m/s</li>
            <li>Velocidad Final = ${velocidad_final} m/s</li>
            <li>Distancia = ${distancia} m</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. <br>
        <ul><li>a = (Vf - Vo) / t</li></ul> <br></p>
        <p>3. Según ecuación se deben de sustituir los valores de cada variable. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = ((${velocidad_final} m/s)^2 - (${velocidad_inicial}m/s)^2) / 2*${distancia} s</p><br>
        <p>4. Se realiza la operación. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((${velocidad_final})^2 - (${velocidad_inicial})^2) / 2*${distancia} | m/s^2</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = ${aceleracion} m/s^2</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos
    }else if(velocidad_inicial>=0 && distancia>0 && tiempo>0){
        let aceleracion = await aceleracion_sin_vf(velocidad_inicial,distancia,tiempo);
        aceleracion = parseFloat(aceleracion).toFixed(2);
        document.getElementById("divResultados").style.display = "block";
        let htmlResult = `<b>${aceleracion} m/s^2</b>`;
        document.getElementById("h2resultado").innerHTML = htmlResult;
        let htmlVariables = `<li>Velocidad inicial = ${velocidad_inicial} m/s</li>
            <li>Distancia = ${distancia} m</li>
            <li>Tiempo = ${tiempo} s</li>
        `;
        document.getElementById("variables").innerHTML = htmlVariables;
        let htmlPasos =`
        <p>2. Encontrar una fórmula que cumpla con las variables que tenemos a disposición. En este caso se utilizará la fórmula para hallar distancia. <br>
        <ul><li>d = Vo*t + 1/2 at^2</li></ul> <br></p>
        <p>3. Despejamos la aceleración y la fórmula entonces queda de la siguiente manera.<br>
        <ul><li>a = 2(d-Vo*t)/t^2</li></ul> <br></p>
        <p>4. Según ecuación se deben de sustituir los valores de cada variable. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = ((${velocidad_final} m/s)^2 - (${velocidad_inicial}m/s)^2) / 2*${distancia} s</p><br>
        <p>5. Se realiza la operación. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((${velocidad_final})^2 - (${velocidad_inicial})^2) / 2*${distancia} | m/s^2</p>
        <p>Resultado: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aceleración = ${aceleracion} m/s^2</p>`;
        document.getElementById("otrospasos").innerHTML = htmlPasos
    }else{
        alert("Hacen falta parámetros para la función.");
    }
}

async function aceleracion_sin_vo(velocidad_final,tiempo,distancia){
    let d = parseFloat(distancia);
    let vf = parseFloat(velocidad_final);
    let t = parseFloat(tiempo);
    let aceleracion = (-2*(d-(vf*t)))/(Math.pow(t,2));
    return aceleracion;
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

