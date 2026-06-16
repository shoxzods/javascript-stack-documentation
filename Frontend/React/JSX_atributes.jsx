// -------------------------------- JSX Attributes ------------------------------- //


// className
/*
    В отличие от html class в jsx пишется camelCase: className:
*/

function App() {
    return (
        <p className="myClass">Lorem.</p>
    )
}

// Events in JSX:
/*
    Events также пишутся в стиле camelCase: onClick
*/

function Map() {
    function increment(e) {
        console.log(e.target)
    }

    return (
        <div>
            <button onClick={increment}>click</button>
            <button onClick={(e) => e.target}></button>
        </div>
    )
}

// style Attribute:
/*
    В отличие от html style = "color:red" , в jsx style = {{ color:"red" }}

    Значения стилей передается через "" строки.

    И property css который имеет - такое значение: font-size и теперь пишется в стиле camelCase: fontSize
*/

function String() {
    return (
        <p style={{fontSize:"23px"}}>Lorem.</p>
    )
}