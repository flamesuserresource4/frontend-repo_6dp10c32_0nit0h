import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/testimonials`)
        const data = await res.json()
        setItems(data.testimonials || [])
      } catch (e) {
        setItems([])
      }
    }
    fetchData()
  }, [])

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">What clients say</h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          We take pride in every yard. Here's what homeowners love about working with Forevergreen.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100/60">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-amber-400' : 'fill-transparent'}`} />
                ))}
              </div>
              <p className="mt-3 text-gray-700">“{t.quote}”</p>
              <div className="mt-4 font-semibold text-gray-900">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
