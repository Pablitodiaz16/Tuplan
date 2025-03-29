import Image from "next/image"
import HomeClient from "./page-client"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] text-[#333]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f5f2e9] shadow-md">
        <div className="container mx-auto px-4 py-3 relative">
          {/* Logo y título centrados */}
          <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
            <Image src="/logo.png" alt="Tu Plan Logo" width={100} height={100} className="h-24 w-auto" priority />
            <div className="text-3xl font-bold text-[#0a4b4b]">Tu Plan</div>
          </div>

          {/* Línea divisoria verde */}
          <div className="w-full h-0.5 bg-[#0a4b4b] mb-4"></div>

          {/* Navegación debajo del logo - Orden cambiado */}
          <nav className="flex justify-center gap-4">
            <a
              href="#sobre-nosotros"
              className="px-4 py-2 rounded-lg bg-white text-[#0a4b4b] font-bold hover:bg-gray-100"
            >
              Sobre nosotros
            </a>
            <a href="#beneficios" className="px-4 py-2 rounded-lg bg-white text-[#0a4b4b] font-bold hover:bg-gray-100">
              Beneficios
            </a>
            <a href="#contacto" className="px-4 py-2 rounded-lg bg-white text-[#0a4b4b] font-bold hover:bg-gray-100">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-b from-[#f9f9f9] to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a4b4b]">Tu despedida, a tu manera</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Planifica con anticipación, desde la tranquilidad de tu casa, sin presiones ni llamadas incómodas.
          </p>

          {/* Imagen de familia añadida aquí */}
          <div className="max-w-3xl mx-auto mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/family-image.png"
              alt="Familia feliz en jardín"
              width={800}
              height={533}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Botón removido de aquí */}
        </div>
      </section>

      {/* Content Section with Bullets */}
      <section className="py-16" id="sobre-nosotros">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1 mr-4">
                  <Image src="/dove-logo.png" alt="Tu Plan Logo" width={24} height={24} className="w-full h-auto" />
                </div>
                <p className="text-lg">
                  Sabemos que nadie quiere hablar del día que nos toque partir, pero también sabemos que muchos
                  prefieren dejar todo resuelto.
                </p>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1 mr-4">
                  <Image src="/dove-logo.png" alt="Tu Plan Logo" width={24} height={24} className="w-full h-auto" />
                </div>
                <p className="text-lg">
                  Con nuestra plataforma podés planificar tu despedida con anticipación, desde la tranquilidad de tu
                  casa, sin presiones ni llamadas incómodas.
                </p>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1 mr-4">
                  <Image src="/dove-logo.png" alt="Tu Plan Logo" width={24} height={24} className="w-full h-auto" />
                </div>
                <p className="text-lg">
                  Te damos el control para decidir cómo querés que te recuerden, con opciones simples, claras y humanas.
                </p>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1 mr-4">
                  <Image src="/dove-logo.png" alt="Tu Plan Logo" width={24} height={24} className="w-full h-auto" />
                </div>
                <p className="text-lg">
                  Además, acompañamos a tu familia cuando más lo necesita: trámites y documentación, asesoría legal y
                  apoyo psicológico.
                </p>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1 mr-4">
                  <Image src="/dove-logo.png" alt="Tu Plan Logo" width={24} height={24} className="w-full h-auto" />
                </div>
                <p className="text-lg">
                  Lo más importante: muchas personas ni siquiera saben qué tienen contratado, o si están realmente
                  cubiertas. Por eso, este servicio también te da claridad sobre tu situación actual, para que tomes
                  decisiones con información y tranquilidad.
                </p>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1 mr-4">
                  <Image src="/dove-logo.png" alt="Tu Plan Logo" width={24} height={24} className="w-full h-auto" />
                </div>
                <p className="text-lg">
                  Esto no se trata de morir. Se trata de vivir tranquilo sabiendo que cuidás a los tuyos, incluso cuando
                  ya no estés.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a4b4b]">Beneficios</h2>
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="p-6 bg-[#f9f9f9] rounded-lg hover:translate-y-[-5px] transition-transform">
                <div className="text-4xl text-[#0a4b4b] mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2 text-[#0a4b4b]">Todo 100% online</h3>
                <p>Gestiona todo desde la comodidad de tu hogar, sin necesidad de desplazamientos ni papeleos.</p>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 bg-[#f9f9f9] rounded-lg hover:translate-y-[-5px] transition-transform">
                <div className="text-4xl text-[#0a4b4b] mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-[#0a4b4b]">Sin sorpresas ni sobrecostos</h3>
                <p>Precios transparentes y claros desde el principio, sin cargos ocultos ni sorpresas.</p>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 bg-[#f9f9f9] rounded-lg hover:translate-y-[-5px] transition-transform">
                <div className="text-4xl text-[#0a4b4b] mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2 text-[#0a4b4b]">
                  Con respaldo de las funerarias más importantes
                </h3>
                <p>Trabajamos con las mejores funerarias del país para garantizar un servicio de calidad.</p>
              </div>

              {/* Benefit 4 */}
              <div className="p-6 bg-[#f9f9f9] rounded-lg hover:translate-y-[-5px] transition-transform">
                <div className="text-4xl text-[#0a4b4b] mb-4">🍃</div>
                <h3 className="text-xl font-bold mb-2 text-[#0a4b4b]">Opciones ecológicas</h3>
                <p>Ofrecemos alternativas respetuosas con el medio ambiente para quienes lo prefieran.</p>
              </div>

              {/* Benefit 5 */}
              <div className="p-6 bg-[#f9f9f9] rounded-lg hover:translate-y-[-5px] transition-transform">
                <div className="text-4xl text-[#0a4b4b] mb-4">🐾</div>
                <h3 className="text-xl font-bold mb-2 text-[#0a4b4b]">No nos olvidamos de las mascotas</h3>
                <p>También incluimos opciones para asegurar el bienestar de tus compañeros de vida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA after Benefits */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <HomeClient />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a4b4b]">Lo que dicen nuestros usuarios</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-6">
                "Nunca pensé que planificar algo así podría ser tan sencillo y reconfortante. Me ha dado una
                tranquilidad que no esperaba."
              </p>
              <p className="font-bold">- Bettina DLS.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-6">
                "Después de la experiencia que tuvimos con mi padre, decidí que no quería que mis hijos pasaran por lo
                mismo. Tu Plan me dio la solución perfecta."
              </p>
              <p className="font-bold">- Carlos M.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-6">
                "La claridad y transparencia del servicio es lo que más valoro. Por fin entiendo exactamente qué tengo
                contratado y qué puedo esperar."
              </p>
              <p className="font-bold">- Cindy M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a4b4b]">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="font-bold text-xl mb-2 flex justify-between items-center text-[#0a4b4b]">
                ¿Por qué debería planificar mi despedida con anticipación?
                <span>▼</span>
              </div>
              <div className="mt-4">
                <p>
                  Planificar con anticipación te permite tomar decisiones con calma, asegurarte de que tus deseos sean
                  respetados y evitar que tus seres queridos tengan que tomar decisiones difíciles en momentos de dolor.
                  Además, te da la tranquilidad de saber que todo está resuelto.
                </p>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="font-bold text-xl mb-2 flex justify-between items-center text-[#0a4b4b]">
                ¿Cómo funciona exactamente el servicio?
                <span>▼</span>
              </div>
              <div className="mt-4">
                <p>
                  Nuestro servicio te permite crear un plan personalizado a través de nuestra plataforma online. Podrás
                  especificar tus preferencias, elegir entre diferentes opciones y dejar instrucciones claras. Todo
                  queda registrado y tus seres queridos tendrán acceso a esta información cuando sea necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a4b4b] text-white text-center" id="contacto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prepárate para el futuro con tranquilidad</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Deja todo resuelto y brinda a tus seres queridos la tranquilidad que merecen en momentos difíciles.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/59899382548"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#2ecc71] text-white font-bold rounded-lg hover:bg-[#27ae60] transition-all flex items-center justify-center gap-2"
            >
              <Image
                src="/whatsapp-logo.jpeg"
                alt="WhatsApp Logo"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
              />
              Quiero contactarme por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/dove-logo.png" alt="Tu Plan Logo" width={40} height={40} className="h-10 w-auto" />
                <h3 className="text-xl font-bold">Tu Plan</h3>
              </div>
              <p className="mb-4 text-center md:text-left">
                Planifica tu despedida con anticipación, desde la tranquilidad de tu casa.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-2xl">
                  📱
                </a>
                <a href="#" className="text-2xl">
                  📸
                </a>
                <a href="#" className="text-2xl">
                  🐦
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#sobre-nosotros" className="text-gray-300 hover:text-white">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-gray-300 hover:text-white">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-300 hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Aviso legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-400 mt-12 pt-8 border-t border-gray-700">
            <p>&copy; 2025 Tu Plan. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

