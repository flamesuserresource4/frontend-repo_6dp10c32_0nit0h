import { useEffect, useState } from 'react'
import { Leaf, Sprout, Flower2, Trees } from 'lucide-react'

const ICONS = {
  leaf: Leaf,
  sprout: Sprout,
  flower: Flower2,
  trees: Trees,
}

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (err) {
        setServices([])
      }
    }
    fetchServices()
  }, [])

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Services</h2>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
        Comprehensive care for lawns, gardens, and outdoor living. Tailored plans to fit your property and lifestyle.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {services.map((s, idx) => {
          const Icon = ICONS[s.icon] || Leaf
          return (
            <div key={idx} className="p-6 rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100/60 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{s.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
