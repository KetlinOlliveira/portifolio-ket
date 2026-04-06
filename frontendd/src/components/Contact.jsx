import { useState } from 'react'

// ─────────────────────────────────────────────────────────────
//  URL DO BACKEND
//
//  Em DESENVOLVIMENTO: o Vite proxy em vite.config.js
//  redireciona "/api/..." para o Railway automaticamente,
//  resolvendo o problema de CORS sem precisar mudar nada aqui.
//
//  Em PRODUÇÃO (após o build): coloque a URL completa do Railway
//  na variável de ambiente VITE_API_URL no painel do seu host
//  (Vercel, Netlify, etc.) e o código abaixo vai usá-la.
//  Se não definir, cai no fallback com a URL do Railway.
// ─────────────────────────────────────────────────────────────
const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/contato`
  : 'https://portifolio-ket-production.up.railway.app/api/contato'

function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('success')
        setForm({ nome: '', email: '', mensagem: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Erro ao enviar:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contato">
      <div className="contact-container">
        <span className="section-tag">Vamos Trabalhar Juntos!</span>
        <h2 className="section-title">Entre em contato</h2>
        <span className="contact-sub">Ficou interessado? Me manda uma mensagem!</span>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mensagem</label>
            <textarea
              name="mensagem"
              placeholder="Me conta seu projeto..."
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-submit"
            disabled={status === 'loading'}
            style={{ opacity: status === 'loading' ? 0.7 : 1 }}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>

        {status === 'success' && (
          <div id="mensagem-sucesso" className="show">
            ✅ E-mail enviado com sucesso! Falo com você em breve.
          </div>
        )}

        {status === 'error' && (
          <div id="mensagem-sucesso" className="show" style={{ borderColor: '#ff4d4d', color: '#ff4d4d' }}>
            ❌ Erro ao enviar. Verifique se o back-end está rodando.
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
