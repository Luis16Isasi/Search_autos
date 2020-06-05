let año = new Date().getFullYear();
let año_min = año - 10;

for( let i = año; i >= año_min; i-- ){
    let padre_año = document.getElementById('año');
    let select_hijo = document.createElement('option');
    select_hijo.innerText = i;
    select_hijo.value = i
    //añadiendolo al DOOM
    padre_año.appendChild(select_hijo);
}

//eventlistenner
document.addEventListener('DOMContentLoaded', () => {
    mostrar_autos(autos);
});

function mostrar_autos(autos){
    
    let content_resultados = document.getElementById('resultados');
    //verificar si tienen algo 
    while(content_resultados.firstChild){
        content_resultados.removeChild(content_resultados.firstChild);
    }
    //leer el div al que le colocare los resultados
    autos.forEach( auto => {
        let auto_resultado = document.createElement('p');
        auto_resultado.style.textAlign = 'center';
        auto_resultado.style.fontFamily = ' sans-serif';
        auto_resultado.innerHTML = ` <hr> <p> ${auto.marca} - ${auto.modelo} - ${auto.puertas} puertas - ${auto.transmision} - Precio ${auto.precio} - Color: ${auto.color} </p>`;

        content_resultados.appendChild(auto_resultado);
    });
}

//objeto con datos para la busqueda
let datos_busqueda = {
    marca: '',
    año: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};

//evento para la marca
document.getElementById('marca').addEventListener('input', e => {
    datos_busqueda.marca = e.target.value;
    filtrar_auto();
});
//evento para el año
document.getElementById('año').addEventListener('input', e => {
    datos_busqueda.año = Number(e.target.value); 
    filtrar_auto();
});
//evento para el precio_min
document.getElementById('precio_min').addEventListener('input', e => {
    datos_busqueda.minimo = Number(e.target.value);
    filtrar_auto();
});
//evento para el precio max
document.getElementById('precio_max').addEventListener('input', e => {
    datos_busqueda.maximo = Number(e.target.value);
    filtrar_auto();
});
//evento para las puertas
document.getElementById('puertas').addEventListener('input', e => {
    datos_busqueda.puertas = Number(e.target.value);
    filtrar_auto();
});
//evento para la trasmision
document.getElementById('transmision').addEventListener('input', e => {
    datos_busqueda.transmision = e.target.value;
    filtrar_auto();
});
//evento para el color
document.getElementById('color').addEventListener('input', e => {
    datos_busqueda.color = e.target.value;
    filtrar_auto();
});


// filtar resultados  
function filtrar_auto(){
    const resultado = autos.filter(filtrar_marca).filter(filtrar_año)
    .filter(filtrar_minimo).filter(filtrar_maximo).filter(filtrar_puertas)
    .filter(filtrar_transmision).filter(filtrar_color);
    
    if(resultado.length){
        mostrar_autos(resultado);
    }else{
        mostrar_autos(resultado);
        const mensaje_padre = document.querySelector('#mensaje');
        const mensaje = document.createElement('p');
        mensaje.style.border = '1px solid red';
        mensaje.innerHTML = `<p> No hay Resultados </p>`;
        mensaje_padre.appendChild(mensaje);
        setTimeout(() => {
            mensaje.remove();
        }, 2500)
    }
}

//filtar por marca
function filtrar_marca(auto){
    if(datos_busqueda.marca){
        return auto.marca === datos_busqueda.marca;
    }else{
       return auto;
    }
}
//filtrar año 
function filtrar_año(auto){
    if(datos_busqueda.año){
        return auto.year === datos_busqueda.año;
    }else{
        return auto;
    }
}
//filtrar minimo
function filtrar_minimo(auto){
    if(datos_busqueda.minimo){
        return auto.precio >= datos_busqueda.minimo;
    }else{
        return auto;
    }
}
//filtrar maximo
function filtrar_maximo(auto){
    if(datos_busqueda.maximo){
        return auto.precio <= datos_busqueda.maximo;
    }else{
        return auto;
    }
}
//filtrar puertas
function filtrar_puertas(auto){
    if(datos_busqueda.puertas){
        return auto.puertas === datos_busqueda.puertas;
    }else{
        return auto;
    }
}
//filtrar transmision
function filtrar_transmision(auto){
    if(datos_busqueda.transmision){
        return auto.transmision === datos_busqueda.transmision;
    }else{
        return auto;
    }
}
//filtrar color
function filtrar_color(auto){
    if(datos_busqueda.color){
        return auto.color === datos_busqueda.color;
    }else{
        return auto;
    }
}