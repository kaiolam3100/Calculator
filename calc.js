

function insert(num){
        document.getElementById('resultado').innerHTML += num;
    }


function clean(){
    let result = document.getElementById('resultado');
    result.innerHTML = '';

}


function igual(){
    let result = document.getElementById('resultado').innerHTML;
    if(result){
    document.getElementById('resultado').innerHTML = eval(result); //Estudar eval
    }

}






/* DESTA FORMA, O CÓDIGO NÃO FUNCIONOU!!!!!!!
function igual(){
    let result = document.getElementById('resultado').innerHTML;
    if(result){
        document.getElementById('resultado').innerHTML
        result.innerHTML = eval(result); //Estudar eval
    }

}
*/



