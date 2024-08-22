//identifica los elementos del html donde vamos a mostrar la informacion

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