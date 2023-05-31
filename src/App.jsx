import './App.css'
function App () {
  const nombre = "Leandro"
  const expectativas = "Seguridad cibernetica"
    return (
        <div className="App">
        <h1>¡Hola soy {nombre}!</h1>
        <p>Quisiera contarte que me gustaría hacer una página o aplicación sobre {expectativas}</p>
        <p>Contanos que más te gustaría hacer con react? ¿Cuales son tus metas como futuro Devs Front-end?</p>
        <p>Te animas a escribir estas metas en etiquetas de tipo lista? </p>
        <ul>
          <li>Seguir aprendiendo mas sobre react</li>
          <li>Poder realizar paginas webs</li>
          <li>Implementarlo mas seguido</li>
        </ul>
        </div>
    )
}
export default App