// var aux = document.getElementsByName('rojo');
function establecercolor(num) {
    switch (num) {
        case 1:
            document.body.style.backgroundColor = 'red';
            break;
        case 2:
            document.body.style.backgroundColor = 'green';
            break;
        case 3:
            document.body.style.backgroundColor = 'blue';
            break;
        default:
            break;
    }

}

var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }

];

var aprobado = alumnos.filter(est => est.nota >= 6);
    console.log(aprobado);

const areadetexto = document.getElementById('escribir1');

let contador = document.querySelector('.cantidadpalabras');

areadetexto.addEventListener('input', function(){
   let mystring = areadetexto.value.length;
   console.log(mystring);
   if(areadetexto.value.length){
   contador.innerText ="Caracteres: "+  mystring;
    contador.style.display = '';    
}else{
    contador.style.display = 'none';
}

});



