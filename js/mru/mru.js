'use strict'

function distancia(){
    let velocidad = document.getElementById("txtVelocidad").value;
    let tiempo = document.getElementById("txtTiempo").value;
    if(velocidad.length == 0){
        alert("Ingrese un valor en la velocidad")
        return;
    }
    if(tiempo.length == 0){
        alert("Ingrese un valor en el tiempo")
        return;
    }
    if(velocidad>=0 && tiempo >= 0){
        let resultado = velocidad * tiempo;
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

function velocidad(){
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

function tiempo(){
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