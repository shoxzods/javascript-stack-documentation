import axios, { create } from "axios";
import { config } from "dotenv";

/*
  axios - это библиотека для работы с Rest Api вместо fetch.
  axios - автоматически обертывает дату в json() и fomdate
  axios.method("url" , body , {
      headers: {
        Authorization: "Bearer" + token
      }
  });
*/


// GET method

// axios: auto json()
function getAxios() {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(
    res => console.log(res.data)
  ).catch(
  err => {
    console.log(err.message)
  })
}

// fetch: json() ogirish kerak
function getFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => res.json()
  ).then(
      data => console.log(data)
  )
  .catch(
    err => {
      console.log(err.message)
  });
}


// POST method

// axios: post if Content-Type: json -> autoCompleted

function postAxios() {
  axios.post("https://jsonplaceholder.typicode.com/posts" , {
     title: "My first post",
     body: "Hello JSONPlaceholder",
     userId: 1,
  }).then(
    res => console.log(res)
  ).catch(
    err => console.log(err.message)
  );
}

// fetch:
function postFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts" , {
    
    method:"POST",
    headers: {
      "Content-Type":"application/json"
    },
    
    body: JSON.stringify ({
      title: "My first post",
      body: "Hello JSONPlaceholder",
      userId: 1,
    })

}).then(
  res => console.log(res)
).catch(
  err => console.log(err.message)
);
}


// if the Content-Type is formdata

const form = new FormData();
form.append("name" , "shoxzod");
form.append("age" , 12);

// axios:
function postFormDataAxios() {
  axios.post('https://httpbin.org/post' , form ).then(
    res => console.log(res)
  ).catch(
    err => console.log(err.message)
  );
}

function postFormDataFetch() {
  fetch('https://httpbin.io/post' , {
      method:"POST",
      body:form
  }).then(
     res => res.json()
  ).then(
     message => console.log(message)
  )
  .catch(
    err => console.log(err.message)
  );
}


// Authrization:

// axios
function postAuthorizationAxios() {

axios.post('https://jsonplaceholder.typicode.com/posts', { name: 'Shohzod' }, {
  headers: {
    Authorization: 'Bearer 123'
  }
}).then(
  res => console.log(res.data)
).catch(
  err => console.log(err.message)
);

}


// fetch
function postAuthorizationFetch() {

fetch('https://jsonplaceholder.typicode.com/posts', {
  method:"POST" ,
 
  headers: {
    "Content-Type" : "application/json",
     Authorization : "Bearer 123"
  },

  body:JSON.stringify({
    name:"Shoxzod"
  })
}).then(
  res => res.json()
)
.then(
  data => console.log(data)
)
.catch(
  err => console.log(err.message)
);
}


// --------------------------------- Axios настройкаси --------------------------------- //
/*
  instance va intercepsions lar ./src/app/api.js saqlanadi.
*/ 

// instance:
/*
  instance используется для того чтобы задать timeout который ждет запрос от сервера в определеннеое время.
  baseUrl - для сокрашенного написания parametrs.
*/

const api = create({
  baseURL:"https://jsonplaceholder.typicode.com",
  timeout:1000,
});

function instance() {
  api.get('/posts/123232323232').then(
    res => res
  ).catch(
    err => err
  );
}

// interceptors:
/*
  intercepotrs отвеяает на запрос и за ответ к серверу.

  request - он отправляет данные до вызова api
  response - от получает ответ от сервера
*/ 

// request:
api.interceptors.request.use( config => {
    config.headers.Authorization = "Bearer 1234";
    return config
});

// response:
api.interceptors.response.use( response => {
      console.log(response);
}, 
  error => {
    console.log(error.message)
  }
)

instance();