import { useState } from 'react';

const Imc = () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();
  const [mensagem, setMensagem] = useState();
  const calcImc = () => {
    const Metro = altura / 100;
    const imc = peso / Metro ** 2;
    const arredondar = imc.toFixed(2);
    setResultado(arredondar);

    let msg = '';
        if (imc < 18.5) {
            msg = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            msg = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            msg = 'Sobrepeso';
        } else {
            msg = 'Obesidade';
        }
        setMensagem(msg);
    
  };
  return (
    <div>
      <h1>Calculadora de IMC:</h1>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso(Kg)"
        required
      />
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura(M)"
        required
      />
      <button onClick={calcImc}>Calcular</button>
      <h2>{resultado}</h2>
      <h3>{mensagem}</h3>
    </div>
  );
};

export default Imc;
