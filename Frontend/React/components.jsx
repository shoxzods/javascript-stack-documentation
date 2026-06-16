// --------------- Components ----------------------------------------- //

/*
    Components - нужно чтобы переиспользовать код для стрницы.
    И компоненты пишутся pascalCase: Home

    И чтобы вызвать компоненту надо вызвать его как тег.
*/

function HomeComponent() {
    return (
        <p>Lorem.</p>
    )
}

function App() {
    return(
        <HomeComponent />
    )
}