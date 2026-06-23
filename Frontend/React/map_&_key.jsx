// ------------------------------- Map and Key --------------------------------------- //

/*
    Map array метод используется для рендеринга компонентов.

    key - используетя для того чтобы react смог отслежаивать елементы. Проверят если они удалены изменены добавлены через id который им дан.
*/

const data = [
    {
        id:1,
        full_name:"shoxzod"
    },
    {
        id:2,
        full_name:"primov"
    }
];

function App() {
    return (
        <ul>
            {data.map(
                item => <li key={item.id}>{item.full_name}</li>
            )}
        </ul>
    )
}