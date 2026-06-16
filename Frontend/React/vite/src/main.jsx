import { createRoot } from 'react-dom/client'


function Home({title , ...rest}) {
    return (
        <p {...rest}>sddf</p>
    )
}

function App() {
    return (
        <Home title="salom" /> // text - это props.
    )
}

createRoot(document.getElementById('root')).render(
  <App />
)