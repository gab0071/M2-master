var URL = "http://localhost:5000/amigos";

//'#boton'por que es id fuera '.boton'si fuera una class
//$('#boton').click(function () {
//  $('#lista').empty();//borro a valico lo que tengo en lista.
//$.get(`${URL}`, function (response) {
//  console.log(response)
//response.forEach(e => {
//  let li = document.createElement('li');
//  li.id = e.id;
//  li.innerText = e.name;
//  let list = document.getElementById('lista');
//  list.appendChild(li);// or append tambien trabaja
//***ahora por jquery**** *Edad: ${e.age} Email: ${e.email}/
//*******ojo solo esta va ***$('#lista').append(`<li id="${e.id}"> ${e.name} X</li>`)
//$('#amigo').append(`<li id="${e.id}"> ${e.name} </li>`)

// })
// })
//})
/***************************/
// let showFriends = function () {
//    $('#lista').empty();//borro a lo que tengo en lista.
//    $.get(`${URL}`, function (response) {
//        console.log(response);
//        response.forEach(e => {
//            //***ahora por jquery**** *Edad: ${e.age} Email: ${e.email}/
//            $('#lista').append(`<li id="${e.id}"> ${e.name} X</li>`)

//        })
//    })
//}
//    ('#boton').click(showFriends);
/************** Todos los Amigos ********************* */
$('#boton').click(() => {

    var list = $('#lista');
    list.empty(); // borrar contenido com .empty()
    //Get, usa 2 variables //url ,    respuesta del servidor recorro array        
    $.get('http://localhost:5000/amigos', res => {
        for (let i = 0; i < res.length; i++) {
            list.append(`<li>${res[i].name}<button id="${e.id}" onClick="deleteFriend(${e.id})"> X</butoon> </li>`)
        }
    })
})

//************** Buscar Amigo **************** */

$('#search').click(function () {
    let id = $('#input').val()// uso la funcion jquery .val() para obtener el valor input
    //verifico id sea id
    if (id) {
        $.get(`${URL}/${id}`, function (friend) {
            console.log(friend);
            //uso punto text por que viene de un span que va resivi texto
            // otra alternativa 'el nombre de mi amigo: ' + friend.name
            $('#amigo').text(`${friend.name} ${friend.age} ${friend.email}`);
            $('#input').val("");// un valor vacio
        })
    } else {
        $('#amigo').text('Tenes que ingresar un numero ID entre 1-6');

    }

})
/*******************DELATE PERSON************ */
let delateFriend = function () {
    let id = $('#inputDelete').val() 
    if(id){
// ajax recive 3 parametros  url, type, success
$.ajax({
    type:"DELETE",
    url: `${URL}/${id}`,
    success:()=>{
        $('#succes').text(`amigo  ${friend.name}} Borrado`);
        $('#inputDelete').val("");
        showFriends();
    }

})
    }
    else{
$('#success').text('porfavor ingrasar diferene ID'); 
    }
};
$('#delete').click(deleteFriend);
//****************** */