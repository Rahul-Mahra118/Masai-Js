
import './App.css'

function App(){

    const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <h1>My App</h1>
      <ListComponent  items={items}/>
    </div>
  );
}

export default App

function ListComponent({items} ) {
  console.log(items)
  return (
    <div>
      <h2>Item List</h2>
      {items.length > 0 && items.map((item) => <p>{item}</p>)}
    </div>
  );
}
