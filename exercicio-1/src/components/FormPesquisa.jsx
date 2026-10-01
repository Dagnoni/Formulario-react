import React, { useState } from 'react';

export default function FormPesquisa() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [satisfacao, setSatisfacao] = useState('neutro');
  const [comentario, setComentario] = useState('');
  const [aceiteTermos, setAceiteTermos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('--- Pesquisa de Satisfação ---');
    console.log({
      nome,
      email,
      satisfacao,
      comentario,
      aceiteTermos,
    });

    // Reset aos estados iniciais
    setNome('');
    setEmail('');
    setSatisfacao('neutro');
    setComentario('');
    setAceiteTermos(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Exercício 1 — Pesquisa de Satisfação</h2>

      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
      </div>

      <div className="form-group">
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
      </div>

      <div className="form-group">
        <label>Nível de Satisfação:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="satisfacao"
              value="insatisfeito"
              checked={satisfacao === 'insatisfeito'}
              onChange={(e) => setSatisfacao(e.target.value)}
            />
            Insatisfeito
          </label>
          <label>
            <input
              type="radio"
              name="satisfacao"
              value="neutro"
              checked={satisfacao === 'neutro'}
              onChange={(e) => setSatisfacao(e.target.value)}
            />
            Neutro
          </label>
          <label>
            <input
              type="radio"
              name="satisfacao"
              value="satisfeito"
              checked={satisfacao === 'satisfeito'}
              onChange={(e) => setSatisfacao(e.target.value)}
            />
            Satisfeito
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Comentário Livre:</label>
        <textarea
          rows="3"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Deixe seu comentário..."
        />
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={aceiteTermos}
            onChange={(e) => setAceiteTermos(e.target.checked)}
          />
          Aceito os termos de privacidade da pesquisa
        </label>
      </div>

      <button type="submit" disabled={!aceiteTermos}>
        Enviar Pesquisa
      </button>
    </form>
  );
}
