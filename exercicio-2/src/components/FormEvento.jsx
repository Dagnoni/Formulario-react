import React, { useState } from 'react';

export default function FormEvento() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipoParticipante, setTipoParticipante] = useState('estudante');
  const [turno, setTurno] = useState('manha');
  const [oficinas, setOficinas] = useState([]);
  const [aceiteRegulamento, setAceiteRegulamento] = useState(false);

  const handleOficina = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setOficinas([...oficinas, value]);
    } else {
      setOficinas(oficinas.filter((o) => o !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('--- Inscrição no Evento ---');
    console.log({
      nome,
      email,
      tipoParticipante,
      turno,
      oficinas,
      aceiteRegulamento,
    });

    // Reset aos estados iniciais
    setNome('');
    setEmail('');
    setTipoParticipante('estudante');
    setTurno('manha');
    setOficinas([]);
    setAceiteRegulamento(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Exercício 2 — Inscrição em Evento de Tecnologia</h2>

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
        <label>Tipo de Participante:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="tipoParticipante"
              value="estudante"
              checked={tipoParticipante === 'estudante'}
              onChange={(e) => setTipoParticipante(e.target.value)}
            />
            Estudante
          </label>
          <label>
            <input
              type="radio"
              name="tipoParticipante"
              value="profissional"
              checked={tipoParticipante === 'profissional'}
              onChange={(e) => setTipoParticipante(e.target.value)}
            />
            Profissional
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Turno Preferido:</label>
        <select value={turno} onChange={(e) => setTurno(e.target.value)}>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </div>

      <div className="form-group">
        <label>Oficinas de Interesse:</label>
        <div className="checkbox-list">
          <label>
            <input
              type="checkbox"
              value="frontend"
              checked={oficinas.includes('frontend')}
              onChange={handleOficina}
            />
            Front-end
          </label>
          <label>
            <input
              type="checkbox"
              value="backend"
              checked={oficinas.includes('backend')}
              onChange={handleOficina}
            />
            Back-end
          </label>
          <label>
            <input
              type="checkbox"
              value="dados"
              checked={oficinas.includes('dados')}
              onChange={handleOficina}
            />
            Dados
          </label>
          <label>
            <input
              type="checkbox"
              value="ia"
              checked={oficinas.includes('ia')}
              onChange={handleOficina}
            />
            Inteligência Artificial
          </label>
        </div>
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={aceiteRegulamento}
            onChange={(e) => setAceiteRegulamento(e.target.checked)}
          />
          Aceito o regulamento do evento
        </label>
      </div>

      <button type="submit" disabled={!aceiteRegulamento}>
        Finalizar Inscrição
      </button>
    </form>
  );
}
