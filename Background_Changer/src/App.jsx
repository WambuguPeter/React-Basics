import './App.css'
import Button from './components/Button'
function App() {
  const handleChangeBcg =() =>{

  }

  return (    
    <div className="BackgroundChanger">
      <h2>Background Changer</h2>

      <div className="btn">
        <Button color= 'red' changebcg={handleChangeBcg}/>
        <Button color= 'green' changebcg={handleChangeBcg}/>
        <Button color= 'blue' changebcg={handleChangeBcg}/>
      </div>
    </div>
    
  )
}

export default App
