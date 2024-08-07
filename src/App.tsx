import React,{useState} from 'react';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import Form from './componentes/Form';



function App() {
  const [contador, setCounter]=useState(1)
  const[nome , setNome]=useState('')
  const[email , setEmail]=useState('')
  const[senha , setSenha]=useState('')
  function incrementar(){
    setCounter(contador +1)
    
    console.log(contador)
  }
  function form (){
    setNome(nome )
    setEmail(email)
    setSenha(senha)
       console.log(nome)
    console.log(email)
    console.log(senha)
  }
  return (
    <>
    <Header title="Vamos contar" />
    <h2>É só incrementar!</h2>
    <Header title="Começa!" />
    <p>{contador}</p>
    <button onClick={incrementar}>Incrementar</button>
    <Menu>
      <ul>
        <li>React.js</li>
        <li>Typescript</li>
        <li>Node.js</li>
      </ul>
      </Menu>
    <Form>
      <form action="">
        <input  type="text"  placeholder='Digite o seu nome...'/> <br /><br />
        <input  type="text"  placeholder='Digite o seu email...'/><br /><br />
        <input  type="password"  placeholder='Digite a sua senha...'/><br /><br />
        <button onClick={form}>Login</button>
      </form>
    </Form>
    </>
    
  );
}

export default App;
