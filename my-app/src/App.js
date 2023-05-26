import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import data from './components/data'

function App() {
  const card = data.map((items)=>{
    return(
      <Card 
        title = {items.title}
        location = {items.location}
        mapUrl = {items.googleMapsUrl}
        startDate = {items.startDate}
        endDate = {items.endDate}
        description = {items.discription}
        image = {items.image}
      
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      {card}
    </div>
  );
}

export default App;
