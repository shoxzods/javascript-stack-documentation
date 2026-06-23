// ------------------  HOC ( Hight Order Component ) --------------------------------------- //

/*
    HOC - принимает компонента и возврашает новый елемент с изменеиями.
*/

function Children(props) {
  return (
      <p {...props}>{props.title}</p>
  )
}

function HOC(Children) {
  return function NewElement({title}) {
    return (
      <div style={{border:"1px solid black" , padding:"10px"}}>
          <Children title={title} />
      </div>
    )
  }
}

const MyComponent = HOC(Children);

export default function App() {
  return (
    <>
      <MyComponent title={'some text here'} />
    </>
  )
}