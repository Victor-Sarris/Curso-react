import Titulo from './Titulo.jsx'

function App(){
  return (
    <div>
      <Titulo cor ="red" nome="Dimitri" paragrafo={true} />
      <Titulo cor = "blue" nome="Victor Sarrís 🪽" paragrafo={true}/>
      <Titulo cor= "purple" paragrafo={false}/>
      <Titulo paragrafo={true}/>
    </div>
  )
}

export default App