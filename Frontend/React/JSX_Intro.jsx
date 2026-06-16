//  -------------------------------- jsx ------------------------------ //

/*
    JSX ( JavaScript in XML ) - позволяет использовать javascript внутри html.

    И нам теперь не приходится использовать document для вызова елеменетов мы создваем их.
*/

// dom:

const buttonElement = document.querySelector("button");
const paragraphElement = document.createElement("p");


// react virtual dom


function MyElements() {
    return (
     <div>
        <button></button>
        <p></p>
     </div>
    )
}