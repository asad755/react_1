import './App.css';
import List from './conmponent/list/List';

function App(){
  const texts = ["Hello","marhaba","wellcom"];
  return (
    <div>
    
     <List data={texts} />
    </div>
  );
}

export default App;







/*
import Item from "../item/Item";

function List({data}:{data: string[]}) {
  const items = data .map(item => <Item data={item}/>)
  return (
    <div>
      
      {items}
    </div>
  );
}

export default App;
*/
