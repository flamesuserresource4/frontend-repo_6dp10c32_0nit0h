import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    // Basic front-end validation
    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email, and a short message.')
      return
    }

    const baseUrl = import.meta.env.VITE_BACKEND_URL || `${window.location.origin.replace('3000','8000')}`

    try {
      setStatus('loading')
      setErrorMsg('')
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        let detail = 'Failed to submit'
        try {
          const data = await res.json()
          detail = data?.detail || JSON.stringify(data)
        } catch {
          // ignore parse errors
        }
        throw new Error(detail)
      }

      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
      setErrorMsg(e?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get a free quote</h2>
        <p className="text-gray-600 mt-2">Tell us about your project and we'll get back to you within one business day.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-emerald-100/60">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Name</label>
          <input name="name" required className="h-11 px-3 rounded-lg ring-1 ring-gray-200 focus:ring-emerald-400 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Email</label>
          <input name="email" type="email" required className="h-11 px-3 rounded-lg ring-1 ring-gray-200 focus:ring-emerald-400 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Phone</label>
          <input name="phone" className="h-11 px-3 rounded-lg ring-1 ring-gray-200 focus:ring-emerald-400 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Service</label>
          <select name="service" className="h-11 px-3 rounded-lg ring-1 ring-gray-200 focus:ring-emerald-400 outline-none">
            <option value="Lawn Care">Lawn Care</option>
            <option value="Garden Design">Garden Design</option>
            <option value="Irrigation">Irrigation</option>
            <option value="Hedge & Tree Care">Hedge & Tree Care</option>
          </select>
        </div>
        <div className="md:col-span-2 flex flex-col gap-1">
          <label className="text-sm text-gray-700">Message</label>
          <textarea name="message" required rows={4} className="px-3 py-2 rounded-lg ring-1 ring-gray-200 focus:ring-emerald-400 outline-none" />
        </div>
        <div className="md:col-span-2 flex items-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition" disabled={status==='loading'}>
            {status === 'loading' ? 'Sending…' : 'Submit'}
          </button>
          {status === 'success' && <span className="text-emerald-600">Thanks! We'll be in touch shortly.</span>}
          {status === 'error' && <span className="text-red-600">{errorMsg || 'Something went wrong. Please try again.'}</span>}
        </div>
      </form>
    </section>
  )
}

export default Contact
