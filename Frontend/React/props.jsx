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
    rest  оператор нужен когда мы не знаем сколько props приходит из parent Component:
*/

function Child({...rest}) {
    return (
        <p>{rest.text}</p>
    )
}

function Parent() {
    return (
        <Child myText = {salom} />
    )
}

// Если передать ...rest опреатор для атриубтов он унаследует и property и его value.
function Sibling({...rest}) {
    return (
        <p {...rest}>Lorem.</p>
    )
}

function Ancesstor() {
    return (
        <Sibling title="some text"  />
    )
}


// Children Props
/*
    children porps помогает расположить Node Element из Parent компонента.
*/


function Home(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function App() {
    return (
        <Home>
            <p>Lorem.</p>
        </Home>
    )
}


// children через destructuring.

function Home({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

function App() {
    return (
        <Home>
            <p>Lorem.</p>
        </Home>
    )
}