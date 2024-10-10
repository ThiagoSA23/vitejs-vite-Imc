import { useState } from 'react';

const Imc = () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();
  const calcImc = () => {
    const Metro = altura / 100;
    const imc = peso / Metro ** 2;
    const arredondar = imc.toFixed(2);
    setResultado(arredondar);
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
      {resultado}
    </div>
  );
};

export default Imc;
