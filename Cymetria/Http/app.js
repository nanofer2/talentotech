//identifica los elementos del html donde vamos a mostrar la informacion
//querySelector = retorna el primer elemento que concuerda con el CSS
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");


//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';//ignorar certificados
/**
 Ignorar Certificados Autofirmados (No recomendado para producción):
Puedes hacer que Node.js ignore los certificados autofirmados. Esto es útil para desarrollo o pruebas locales, 
pero no es seguro para entornos de producción.
*/


/**
 estructura inicial de una petición http 
**/

function sendHTTPRequest(method, url, data){
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    }).then((response)=>{
        return response.json();
    });
}

//cosnumo del endpoint y renderizacion de los componentes en el html
//**Funcion asincrona (Async)  ver clase del 15 de Agoosto, parte final*/
async function fetchPost(){
    const responseData = await sendHTTPRequest("GET","https://jsonplaceholder.typicode.com/posts");
    //console.log(responseData);
     const listOfPost = responseData;
    for ( const post of listOfPost ){

        const postContainer = document.createElement("article");
        postContainer.id = post.id;
        postContainer.classList.add("post-item");//agrego una clase al componente html

        //crea elementos titulo
        const title = document.createElement("h2");
        title.textContent = post.title;

        //crea elementos parrafo
        const body = document.createElement("p");
        body.textContent = post.body;

        //crea elemento boton
        const button = document.createElement("button");
        button.textContent = "Delete content";

        postContainer.append(title);
        postContainer.append(body);
        postContainer.append(button);

        //agrego los elementos en el html 
        listElement.append(postContainer);

    }
}

//fetchPost()
//clase 21 de agosto 2024 voy en 1hr:01 min
//
fetchButton.addEventListener("click",fetchPost);


// hasta aqui fue el primer paso que fue crear la funcion y la peticion, ahora toca extraer la informacion
// iteramos sobre el arreglo de objetos

//------------------------------------------------- POST ---------------
//post, se utiliza para enviar información al servidor

form.addEventListener("submit",(event) =>{
    event.preventDefault();//evita que se recargue la pagna al hacer submit
    //currentTarget = en el form hay items de los cuales queremos obtener un valor 
    //querySelector = identifica elementos mediante el id
    const title = event.currentTarget.querySelector("#title").value;
    const content = event.currentTarget.querySelector("#content").value;
  
    console.log(title,content);
    createPost(title,content);
  });


  //crear funcion que consuma el servicio http y cree el post

  async function createPost(title,content){
    const userId = Math.random();
    //objeto a enviar
    const objPost = {
        userId: userId,
        title: title,
        body: content
    }
    await sendHTTPRequest("post","https://jsonplaceholder.typicode.com/posts",objPost);
  }

  ///funcion para eliminiar un elemento especifico

  postList.addEventListener("click", (event)=>{
    console.log(event);

    if(event.target.tagName =="BUTTON"){//filtra solo los eventos de boton
        const postId = event.target.closest("article".id);//lo mas cercano a la clase article
        sendHTTPRequest("DELETE",`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
  });