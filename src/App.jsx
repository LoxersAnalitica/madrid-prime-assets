import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

/* ─── Icons (inline SVGs) ────────────────────────────────── */

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)

/* ─── Scroll helper ──────────────────────────────────────── */

const scrollToContact = (e) => {
  e.preventDefault()
  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
}

/* ─── Header ─────────────────────────────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-cream/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className={`text-lg md:text-xl tracking-[0.25em] font-semibold transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'
          }`}>
          MADRID PRIME ASSETS
        </a>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className={`px-6 py-2.5 text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer ${scrolled
            ? 'bg-charcoal text-white hover:bg-charcoal-light'
            : 'bg-white/10 text-white border border-white/40 hover:bg-white/20'
            }`}
        >
          Contactar
        </button>
      </div>
    </header>
  )
}

/* ─── Hero Section ───────────────────────────────────────── */

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-building.png"
          alt="Edificio emblemático en Madrid"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] text-white/70 uppercase mb-6 font-light">
          Inversión exclusiva
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8 tracking-tight">
          Inversión Inmobiliaria en{' '}
          <span className="italic font-normal">Edificios en Madrid</span>{' '}
          Off-Market
        </h1>

        <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Adquisición de edificios completos en las zonas más rentables de la
          capital. Máxima rentabilidad y gestión confidencial.
        </p>

        <button
          onClick={scrollToContact}
          className="inline-block bg-white text-charcoal px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-cream transition-colors duration-300 cursor-pointer"
        >
          Hablar con un asesor
        </button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}

/* ─── Services / Benefits Section ────────────────────────── */

const services = [
  {
    title: 'Edificios en Rentabilidad',
    description:
      'Cartera privada de edificios completos con inquilinos estables y retornos inmediatos desde el primer día.',
  },
  {
    title: 'Zonas Prime de Madrid',
    description:
      'Barrio de Salamanca, Chamberí, Centro, Retiro y las ubicaciones con mayor demanda y revalorización.',
  },
  {
    title: 'Operaciones Off-Market',
    description:
      'Acceso a oportunidades exclusivas fuera de mercado con la máxima discreción y confidencialidad.',
  },
  {
    title: 'Asesoramiento Legal y Fiscal Integral',
    description:
      'Acompañamiento completo: due diligence, estructuración fiscal, negociación y cierre de la operación.',
  },
]

function Services() {
  return (
    <section id="servicios" className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-gray-medium uppercase mb-6 font-medium">
          Servicios
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-16 max-w-xl">
          ¿Por qué invertir en Madrid con nosotros?
        </h2>

        {/* Service List */}
        <div className="border-t border-gray-line">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-start md:items-center justify-between py-8 md:py-10 border-b border-gray-line cursor-pointer hover:pl-2 transition-all duration-300"
              onClick={scrollToContact}
            >
              <div className="flex-1 pr-8">
                <h3 className="text-xl md:text-2xl font-normal text-charcoal mb-2 group-hover:text-charcoal-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-medium font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="text-charcoal/40 group-hover:text-charcoal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1 md:mt-0">
                <ArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Map Section ────────────────────────────────────────── */

const madridZones = [
  { name: 'Barrio de Salamanca', lat: 40.4280, lng: -3.6810, radius: 750 },
  { name: 'Chamberí', lat: 40.4350, lng: -3.7050, radius: 700 },
  { name: 'Chamartín', lat: 40.4580, lng: -3.6870, radius: 800 },
  { name: 'Retiro', lat: 40.4140, lng: -3.6830, radius: 700 },
  { name: 'Centro', lat: 40.4155, lng: -3.7074, radius: 650 },
  { name: 'Justicia', lat: 40.4250, lng: -3.6970, radius: 500 },
  { name: 'Malasaña', lat: 40.4270, lng: -3.7070, radius: 450 },
  { name: 'La Latina', lat: 40.4100, lng: -3.7120, radius: 450 },
  { name: 'Chueca', lat: 40.4230, lng: -3.6975, radius: 400 },
  { name: 'Almagro', lat: 40.4340, lng: -3.6930, radius: 450 },
  { name: 'Castellana', lat: 40.4450, lng: -3.6910, radius: 600 },
  { name: 'Jerónimos', lat: 40.4120, lng: -3.6920, radius: 400 },
  { name: 'Cortes', lat: 40.4140, lng: -3.6970, radius: 400 },
  { name: 'Ríos Rosas', lat: 40.4420, lng: -3.7000, radius: 500 },
  { name: 'Nuevos Ministerios', lat: 40.4470, lng: -3.6930, radius: 550 },
]

function MapSection() {
  return (
    <section id="ubicaciones" className="bg-cream-dark py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-gray-medium uppercase mb-6 font-medium">
          Ubicaciones
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-4 max-w-xl">
          Ubicaciones Estratégicas
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-medium font-light max-w-xl mb-12 leading-relaxed">
          Nuestra red de activos se concentra en los distritos más exclusivos y
          rentables de la capital.
        </p>

        {/* Map */}
        <div className="w-full h-[400px] md:h-[500px] border border-gray-line overflow-hidden">
          <MapContainer
            center={[40.4280, -3.6960]}
            zoom={13}
            dragging={false}
            scrollWheelZoom={false}
            zoomControl={false}
            doubleClickZoom={false}
            touchZoom={false}
            attributionControl={false}
            className="w-full h-full z-0"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {madridZones.map((zone, i) => (
              <Circle
                key={i}
                center={[zone.lat, zone.lng]}
                radius={zone.radius}
                pathOptions={{
                  color: '#1A1A1A',
                  weight: 1,
                  fillColor: '#1A1A1A',
                  fillOpacity: 0.15,
                }}
              />
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Section ────────────────────────────────────── */

function Contact() {
  return (
    <section id="contacto" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-gray-medium uppercase mb-6 font-medium">
          Contacto
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-6 max-w-lg">
          Hablemos de su próxima inversión
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-medium font-light max-w-xl mb-16 leading-relaxed">
          Para garantizar la máxima confidencialidad, nuestro equipo atiende las
          peticiones de forma directa. Contáctenos para conocer nuestro portfolio
          privado de edificios.
        </p>

        {/* Contact blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <a
            href="tel:+34661671139"
            className="group flex items-center gap-6 p-8 md:p-10 border border-gray-line hover:border-charcoal/30 hover:bg-cream-dark transition-all duration-300"
          >
            <div className="text-charcoal/50 group-hover:text-charcoal transition-colors duration-300">
              <PhoneIcon />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-medium uppercase mb-2 font-medium">
                Teléfono
              </p>
              <p className="text-xl md:text-2xl font-light text-charcoal tracking-wide">
                +34 661 671 139
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:fernando@atriastays.com"
            className="group flex items-center gap-6 p-8 md:p-10 border border-gray-line hover:border-charcoal/30 hover:bg-cream-dark transition-all duration-300"
          >
            <div className="text-charcoal/50 group-hover:text-charcoal transition-colors duration-300">
              <MailIcon />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-medium uppercase mb-2 font-medium">
                Email
              </p>
              <p className="text-xl md:text-2xl font-light text-charcoal tracking-wide">
                fernando@atriastays.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── WhatsApp Floating Button ───────────────────────────── */

function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/34661671139?text=Hola,%20estoy%20interesado%20en%20recibir%20información%20sobre%20la%20venta%20de%20edificios%20en%20Madrid."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-whatsapp text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
    >
      <WhatsAppIcon />
    </a>
  )
}

/* ─── Footer ─────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-white/40 font-light">
            © {new Date().getFullYear()} Madrid Prime Assets. Todos los derechos reservados.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <a
              href="#aviso-legal"
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-300 tracking-wider"
            >
              Aviso Legal
            </a>
            <a
              href="#politica-privacidad"
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-300 tracking-wider"
            >
              Política de Privacidad
            </a>
            <a
              href="#politica-cookies"
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-300 tracking-wider"
            >
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─────────────────────────────────────────────────── */

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
