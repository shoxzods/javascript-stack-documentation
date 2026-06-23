// -------------------------- Suspense  ------------------------------------ //

/*
    Susbense отображает fallback елемент до момента когда данные отображаются.

    Используется с API lazy который имеет динамический import компоннетов и иммет возможность замедление. 
*/

/*
    Api lazy иммет возможность имортировать component динамически.
*/ 

// Children.jsx:
const data = [ "name" , "lastanme"];
export default function Children() {
    return (
        <ul>
            {data.map(
                (item , key) => <li key={key}>{item}</li> 
            )}
        </ul>
    )
}



// App.jsx
import { lazy, Suspense } from "react";
import Children from "./Children";

const Data = lazy(() => import("./Children") );

export default function App() {
    return (
      <Suspense fallback={<p>...loading</p>}>
          <Data />
      </Suspense>
    )
}