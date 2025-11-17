function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <div className="text-lg font-semibold text-gray-900">Forevergreen Homes & Gardens</div>
          <p className="mt-2">Serving our community with eco-friendly landscaping and garden care.</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Contact</div>
          <p className="mt-2">hello@forevergreen.com</p>
          <p>(555) 123-4567</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Hours</div>
          <p className="mt-2">Mon–Fri: 8am–6pm</p>
          <p>Sat: 9am–2pm</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Forevergreen Homes & Gardens. All rights reserved.</div>
    </footer>
  )
}

export default Footer
