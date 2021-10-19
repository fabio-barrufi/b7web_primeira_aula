import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const [name, setName] = useState('Fábio');
  const [age, setAge] = useState(22);
  const [bg, setBg] = useState('#FF0000')

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de roma.",
    "aqui vai uma frase poética",
    "a inspiração desse programador é pouca"
  ]);

  const handle20 = () => {
    setAge(20);
    setBg("#00FF00")
  }

  const handle30 = () => {
    setAge(30);
    setBg("#FF0000")
  }

  return (
    < div style={{ backgroundColor: bg }}>
      <Header name={name} age={age} />


      {age === 20 && <button onClick={handle30}>Tenho 30 anos </button>
      }


      {age === 30 && <button onClick={handle20}>Tenho 20 anos</button>}

      <hr />

      <ul>
        {list.map((frase, index) => (
          <li key={index}>{frase}</li>
        ))}
      </ul>


      <Footer />
    </div >
  )
}

export default App;