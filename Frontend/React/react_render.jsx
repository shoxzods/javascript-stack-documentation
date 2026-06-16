// --------------------------- React Render ------------------------------------ //


/*
    Чтобы импортировать компоненты в основной html мы должны
    вызвать root из html а потом пендерить.

    createRoot - создает root вызывая елемент из html
    render - рендерит компоненты.
*/ 

function App() {
    return (
        <p>App Component</p>
    )
}


createRoot(document.getElementById("root")).render(
    <App />
)