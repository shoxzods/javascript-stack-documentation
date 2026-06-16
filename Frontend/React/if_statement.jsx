// ------------------------------- if statement -------------------------------------- //

/*
    В React if statement не используется внутри jsx вмчесто него можно исполлзовать 
    terrnary operator ? .
*/

function App() {
    return (
        <p>{ typeof 12 == "number" ? 12 : null }</p>
    )
}