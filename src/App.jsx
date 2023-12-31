import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let images = imageData()
  return(

    
    <div id="app">
      <div id='header'>

      <h1>Functional component</h1>
      </div>
      <div id='grid'>
        {images.map((e)=>(
          <img key={e.id} src={e.img} alt="" />
          ))
        }

      </div>
    </div>

  )
  
}

export default App;
