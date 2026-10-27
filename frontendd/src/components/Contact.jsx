import { useState } from 'react'
import { contactInfo } from '../data/data'

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
        <span className="section-tag">Vamos conversar</span>
        <h2 className="section-title">Entre em contato</h2>
        <span className="contact-sub">
          Tem uma vaga, um projeto ou quer trocar uma ideia? Mande uma mensagem ou escreva para{' '}
          <a href={`mailto:${contactInfo.email}`} className="highlight">{contactInfo.email}</a>.
        </span>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contato-nome">Nome</label>
            <input
              type="text"
              id="contato-nome"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contato-email">Email</label>
            <input
              type="email"
              id="contato-email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contato-mensagem">Mensagem</label>
            <textarea
              id="contato-mensagem"
              name="mensagem"
              placeholder="Conte um pouco sobre a vaga ou o projeto..."
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
          <div id="mensagem-sucesso" className="show" role="status">
            ✅ E-mail enviado com sucesso! Falo com você em breve.
          </div>
        )}

        {status === 'error' && (
          <div id="mensagem-sucesso" className="show" role="alert" style={{ borderColor: '#ff4d4d', color: '#ff4d4d' }}>
            ❌ Não consegui enviar agora. Tente de novo ou escreva direto para{' '}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
