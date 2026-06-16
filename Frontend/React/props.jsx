// --------------------------------------- React Props ----------------------- //

/*
    React Props - дает возможность задать праметры для компонентов находясь в дургом компоненете.

    Параметры задаются точно как аттрибуты.

    Props это обьект параметр который хранит в себе проперти заданным от parent Components.
*/

// props is object parametr:
function Home(props) {
    return (
        <p>{props.text}</p>
    )
}

function App() {
    return (
        <Home text="some text here" /> // text - это props.
    )
}


// destructuring:
/*
    мы также можем исползовать destructurung вместо написания обекта
*/

function Home({title}) {
    return (
        <p title={title}>salom</p>
    )
}

function App() {
    return (
        <Home title="salom" /> // text - это props.
    )
}


// ...rest operator
/*
    rest  оператор нужен когда мы не знаем сколько props приходит из parent Component
*/


