/* 
- Contador de visitas persistente utilizando `localStorage`.
- Botón de "Reestablecer Contador" para reiniciar el contador a cero.
Abre el archivo `index.html` en tu navegador.
2. Cada vez que se recarga la página debe añadir una visita más
3. Debe persistir el número aunque se cierre el navegador
4. Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
5. Toda la lógica tiene que estar en `script.js`
*/
const counteVisits= document.getElementById('contadorVisitas');//Obtenemos el objeto donde mostramos los datos del contador
const buttonReset= document.getElementById('btnReestablecer');//Obtenemos el objeto donde tenemos el botón
console.log(parseInt(counteVisits.innerHTML)===0) //Mostramos cuanto vale el objeto
if(counteVisits.innerHTML==0){ //Comparamos el valor del objeto dentro del HTML
    localStorage.setItem('counter',parseInt(Object.values(localStorage)[0])+1) //Cada vez que entramos a la web añadimos una nueva suma
    console.log(localStorage)//Mostramos el objeto que tenemos almacenado
    console.log(localStorage.getItem('counter')) //Obtenemos el valor del contador
    counteVisits.innerHTML=localStorage.getItem('counter') //Actualizamos la web con el valor del contador
}

buttonReset.addEventListener('click',()=> { //Capturamos el evento cuando hagamos click
    localStorage.clear()
    localStorage.setItem('counter','0') //Actualizamos la base de datos local a 0 cuando hacemos click
    counteVisits.innerHTML=localStorage.getItem('counter') //Actualizamos el valor de la web
    //const fData=document.getElementsByTagName('.p');
    //console.log(fData);
    //fData.innerHTML=`<p>Fecha de último borrado ${Date()}</p>`;

})
