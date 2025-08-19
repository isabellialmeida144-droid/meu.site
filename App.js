
import React, { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [recipes, setRecipes] = useState([
    { title: "Salada colorida com frango grelhado", description: "Refrescante e nutritiva." },
    { title: "Panqueca integral de banana", description: "Doce natural e saudável." },
    { title: "Guacamole saudável", description: "Ótima opção de acompanhamento." }
  ]);

  const [challenges, setChallenges] = useState([
    { title: "Beber 2 litros de água por dia" },
    { title: "Caminhar 30 minutos diariamente" },
    { title: "Dormir 8 horas por noite" }
  ]);

  const [newRecipe, setNewRecipe] = useState("");
  const [newChallenge, setNewChallenge] = useState("");
  const [url, setUrl] = useState("https://seu-link-vercel.vercel.app");

  const addRecipe = () => {
    if (newRecipe.trim() !== "") {
      setRecipes([...recipes, { title: newRecipe, description: "" }]);
      setNewRecipe("");
    }
  };

  const addChallenge = () => {
    if (newChallenge.trim() !== "") {
      setChallenges([...challenges, { title: newChallenge }]);
      setNewChallenge("");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🍎 Sabor e Saúde</h1>
      <h2>Cultivando hábitos alimentares saudáveis</h2>

      <section>
        <h3>Receitas Saudáveis</h3>
        <ul>
          {recipes.map((r, i) => (
            <li key={i}><strong>{r.title}</strong> - {r.description}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Nova receita"
          value={newRecipe}
          onChange={(e) => setNewRecipe(e.target.value)}
        />
        <button onClick={addRecipe}>Adicionar Receita</button>
      </section>

      <section>
        <h3>Desafios Saudáveis</h3>
        <ul>
          {challenges.map((c, i) => (
            <li key={i}>{c.title}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Novo desafio"
          value={newChallenge}
          onChange={(e) => setNewChallenge(e.target.value)}
        />
        <button onClick={addChallenge}>Adicionar Desafio</button>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3>Gerar QR Code</h3>
        <input
          type="text"
          placeholder="Cole aqui o link do site publicado"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <QRCode value={url} size={128} />
      </section>
    </div>
  );
}

export default App;
