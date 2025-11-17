import { Leaf } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-lime-50" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm mb-4">
            <Leaf className="w-4 h-4" /> Trusted local landscaping experts
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Forevergreen Homes & Gardens
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Beautiful, sustainable outdoor spaces designed and maintained with care. From lawns to lush gardens, we help your home thrive year-round.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">Get a free quote</a>
            <a href="#services" className="px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold ring-1 ring-emerald-200 hover:ring-emerald-300 transition">Our services</a>
          </div>
          <div className="mt-8 text-sm text-gray-500">Licensed • Insured • Eco-friendly practices</div>
        </div>
        <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl ring-1 ring-emerald-100">
          <img
            src="https://images.unsplash.com/photo-1518732714860-b62714ce0b18?q=80&w=1600&auto=format&fit=crop"
            alt="Lush green garden with stone path"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
