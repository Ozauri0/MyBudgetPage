import Link from "next/link"
import { Smartphone, BarChart3, Lock, Shield, ChevronRight, Download } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Gestiona tus finanzas personales con MyBudget</h1>
              <p className="text-xl mb-6">
                Una aplicación móvil que te ayuda a controlar tus gastos e ingresos de forma privada y segura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#features"
                  className="btn-primary"
                  style={{ backgroundColor: "white", color: "var(--primary)" }}
                >
                  Ver características
                </a>
                <Link href="/privacy-policy" className="btn-primary btn-outline">
                  Política de privacidad
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="phone-mockup">
                <div className="phone-screen flex items-center justify-center">
                  <Smartphone size={96} color="var(--primary)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Características principales</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="feature-icon">
                  <BarChart3 size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Visualización de Datos</h3>
              <p>Analiza tus finanzas con gráficos intuitivos que te muestran cómo administras tu dinero.</p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="feature-icon">
                  <Lock size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Totalmente Serverless</h3>
              <p>Tus datos nunca salen de tu dispositivo, garantizando la máxima privacidad y seguridad.</p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="feature-icon">
                  <Shield size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Sin Recolección de Datos</h3>
              <p>No recopilamos ninguna información sobre ti o tus finanzas. Todo queda en tu dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Description */}
      <section className="description">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegir MyBudget?</h2>
              <p className="mb-4">
                MyBudget es una aplicación diseñada pensando en tu privacidad. A diferencia de otras aplicaciones de
                finanzas personales:
              </p>
              <ul className="mb-6">
                <li className="flex items-start mb-2">
                  <ChevronRight className="mr-2 text-primary" size={20} />
                  No requiere conexión a internet para funcionar
                </li>
                <li className="flex items-start mb-2">
                  <ChevronRight className="mr-2 text-primary" size={20} />
                  No almacena tus datos en servidores remotos
                </li>
                <li className="flex items-start mb-2">
                  <ChevronRight className="mr-2 text-primary" size={20} />
                  No te muestra anuncios basados en tu información financiera
                </li>
                <li className="flex items-start mb-2">
                  <ChevronRight className="mr-2 text-primary" size={20} />
                  No comparte tus datos con terceros
                </li>
                <li className="flex items-start mb-2">
                  <ChevronRight className="mr-2 text-primary" size={20} />
                  Totalmente gratuita sin compras dentro de la aplicación
                </li>
              </ul>
              <p>
                MyBudget te ofrece el control total sobre tu información financiera con una experiencia de usuario
                simple y elegante.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-primary">¿Cómo funciona?</h3>
                <ol className="mb-0">
                  {[
                    "Registra tus ingresos y gastos diarios",
                    "Categoriza tus transacciones",
                    "Visualiza gráficos mensuales y anuales",
                    "Establece presupuestos por categoría",
                    "Guarda todos tus datos localmente",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start mb-3">
                      <span
                        className="flex items-center justify-center"
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          borderRadius: "50%",
                          backgroundColor: "var(--primary)",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: "0.75rem",
                          fontSize: "0.75rem"
                        }}
                      >
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Descarga MyBudget hoy mismo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comienza a gestionar tus finanzas de forma segura y privada con nuestra aplicación móvil.
          </p>
          <a
            href="https://play.google.com/store"
            className="btn-primary"
            style={{ backgroundColor: "white", color: "var(--primary)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={20} className="mr-2" />
            Descargar en Google Play
          </a>
        </div>
      </section>
    </div>
  )
}
