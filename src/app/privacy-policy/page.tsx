import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduccion", title: "Introducción" },
    { id: "interpretacion", title: "Interpretación y Definiciones" },
    { id: "informacion", title: "Información que recopilamos" },
    { id: "permisos", title: "Permisos de la aplicación" },
    { id: "compartir", title: "Compartir datos con terceros" },
    { id: "analisis", title: "Análisis y cookies" },
    { id: "seguridad", title: "Seguridad de los datos" },
    { id: "derechos", title: "Derechos del usuario" },
    { id: "enlaces", title: "Enlaces a otros sitios web" },
    { id: "cambios", title: "Cambios a esta política" },
    { id: "contacto", title: "Contacto" },
  ]

  return (
    <div style={{ backgroundColor: "var(--background-alt)", minHeight: "100vh", padding: "3rem 0" }}>
      <div className="container">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-primary hover:underline">
            <ChevronLeft size={16} className="mr-2" />
            Volver a inicio
          </Link>
        </div>

        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            backgroundColor: "var(--background)",
            borderRadius: "var(--border-radius-lg)",
            overflow: "hidden",
            boxShadow: "var(--card-shadow)",
          }}
        >
          <div className="privacy-header">
            <h1 className="text-3xl font-bold">Política de Privacidad de MyBudget</h1>
            <p className="mt-2 opacity-90">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="privacy-content">
            {/* Table of Contents */}
            <div
              style={{
                marginBottom: "2.5rem",
                padding: "1rem",
                backgroundColor: "var(--background-alt)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <h2 className="text-xl font-bold mb-3 text-primary">Contenido</h2>
              <nav>
                <ul style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem" }}>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-primary hover:underline"
                        style={{ display: "inline-block", padding: "0.25rem 0" }}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <section id="introduccion" className="privacy-section">
                <h2 className="privacy-title">Introducción</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recolección, uso y divulgación de tu información cuando utilizas el Servicio y te informa sobre tus derechos de privacidad y cómo la ley te protege.
                  </p>
                  <p>
                    Al utilizar el Servicio, aceptas los términos de esta Política de Privacidad. 
                  </p>
                  <div className="privacy-alert">
                    <strong>
                      Es importante destacar que MyBudget funciona completamente de manera serverless y sin recopilar
                      datos.
                    </strong>{" "}
                    Esto significa que todos los datos que ingresas en la aplicación permanecen exclusivamente en tu
                    dispositivo y no se transmiten, almacenan ni procesan en ningún servidor externo.
                  </div>
                </div>
              </section>

              <section id="interpretacion" className="privacy-section">
                <h2 className="privacy-title">Interpretación y Definiciones</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h3 className="text-lg font-bold">Interpretación</h3>
                  <p>
                    Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural.
                  </p>
                  
                  <h3 className="text-lg font-bold">Definiciones</h3>
                  <p>A los efectos de esta Política de Privacidad:</p>
                  <ul style={{
                    listStyleType: "disc",
                    paddingLeft: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}>
                    <li><strong>Cuenta</strong> significa una cuenta única creada para que accedas a nuestro Servicio o partes de nuestro Servicio.</li>
                    <li><strong>Compañía</strong> (referida como "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo) se refiere a MyBudget.</li>
                    <li><strong>País</strong> se refiere a: Chile</li>
                    <li><strong>Dispositivo</strong> significa cualquier dispositivo que puede acceder al Servicio, como un ordenador, un teléfono móvil o una tableta digital.</li>
                    <li><strong>Datos Personales</strong> es cualquier información relacionada con un individuo identificado o identificable.</li>
                    <li><strong>Servicio</strong> se refiere a la Aplicación.</li>
                    <li><strong>Proveedor de Servicios</strong> significa cualquier persona natural o jurídica que procesa los datos en nombre de la Compañía. Se refiere a empresas terceras o individuos empleados por la Compañía para facilitar el Servicio.</li>
                    <li><strong>Datos de Uso</strong> se refiere a los datos recopilados automáticamente, generados por el uso del Servicio o desde la infraestructura del Servicio.</li>
                    <li><strong>Tú</strong> significa la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.</li>
                  </ul>
                </div>
              </section>

              <section id="informacion" className="privacy-section">
                <h2 className="privacy-title">Información que recopilamos</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    <strong>
                      MyBudget no recopila ninguna información personal identificable o no identificable de los
                      usuarios.
                    </strong>{" "}
                    Los datos financieros que ingresas en la aplicación (como transacciones, categorías, presupuestos,
                    etc.) se almacenan localmente en la memoria de tu dispositivo y nunca salen de él.
                  </p>
                  <p>No recopilamos ni tenemos acceso a:</p>
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>Tus datos financieros o económicos</li>
                    <li>Tu nombre o información personal identificable</li>
                    <li>Tu ubicación o dirección IP</li>
                    <li>Identificadores únicos de tu dispositivo</li>
                    <li>Tu actividad dentro de la aplicación</li>
                    <li>Información de tu sistema operativo o navegador</li>
                    <li>Cualquier otra información relacionada con tu uso de MyBudget</li>
                  </ul>
                  <p>
                    A diferencia de muchas aplicaciones, MyBudget está diseñada para funcionar completamente sin conexión a internet y sin transferir ningún dato a servidores externos.
                  </p>
                </div>
              </section>

              <section id="permisos" className="privacy-section">
                <h2 className="privacy-title">Permisos de la aplicación</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    MyBudget puede solicitar ciertos permisos del sistema para funcionar correctamente en tu
                    dispositivo:
                  </p>
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>
                      <strong>Almacenamiento:</strong> Necesario para guardar tus datos financieros localmente en tu
                      dispositivo.
                    </li>
                  </ul>
                  <p>
                    La aplicación no solicita permisos para acceder a Internet, contactos, ubicación, cámara, micrófono
                    u otros recursos sensibles del sistema.
                  </p>
                </div>
              </section>

              <section id="compartir" className="privacy-section">
                <h2 className="privacy-title">Compartir datos con terceros</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    <strong>No compartimos ninguna información con terceros</strong> porque no recopilamos ni tenemos
                    acceso a ningún dato de los usuarios.
                  </p>
                  <p>
                    Ni proveedores de servicios, ni socios comerciales, ni afiliados, ni ninguna otra entidad recibirá información sobre tu uso de MyBudget ya que estos datos nunca salen de tu dispositivo.
                  </p>
                </div>
              </section>

              <section id="analisis" className="privacy-section">
                <h2 className="privacy-title">Análisis y cookies</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    MyBudget no utiliza cookies, servicios de análisis, tecnologías de seguimiento ni ninguna otra forma
                    de monitoreo de usuarios o recopilación de datos. No hay servicios de análisis o telemetría
                    implementados en la aplicación.
                  </p>
                  <p>
                    No utilizamos ningún tipo de software para rastrear tu comportamiento, analizar tendencias, o cualquier otra forma de recopilación de información sobre cómo utilizas la aplicación.
                  </p>
                </div>
              </section>

              <section id="seguridad" className="privacy-section">
                <h2 className="privacy-title">Seguridad de los datos</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    Dado que todos tus datos se almacenan exclusivamente en tu dispositivo, la seguridad de esta
                    información depende principalmente de las medidas de seguridad de tu propio dispositivo.
                    Recomendamos:
                  </p>
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>Mantener tu dispositivo actualizado con las últimas actualizaciones de seguridad</li>
                    <li>Utilizar bloqueo de pantalla (patrón, PIN, huella digital o reconocimiento facial)</li>
                    <li>No dar acceso a tu dispositivo a personas no autorizadas</li>
                    <li>Realizar copias de seguridad periódicas de tus datos importantes</li>
                  </ul>
                  <p>
                    Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger tus Datos Personales, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
                  </p>
                </div>
              </section>

              <section id="derechos" className="privacy-section">
                <h2 className="privacy-title">Derechos del usuario</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    Como todos tus datos permanecen exclusivamente en tu dispositivo, mantienes control total sobre
                    ellos en todo momento. Puedes:
                  </p>
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>Acceder a todos tus datos dentro de la aplicación</li>
                    <li>Modificar tus datos según sea necesario</li>
                    <li>Eliminar parte o la totalidad de tus datos</li>
                    <li>Exportar e importar tus datos desde la aplicación para respaldos o transferencia entre dispositivos</li>
                    <li>Desinstalar la aplicación, lo que eliminará todos los datos almacenados por MyBudget</li>
                  </ul>
                  <p>
                    Al no recopilar ninguna información, no tenemos la obligación de proporcionar mecanismos para que accedas o elimines tus datos de nuestros servidores, ya que nosotros no almacenamos ninguna información tuya.
                  </p>
                </div>
              </section>

              <section id="enlaces" className="privacy-section">
                <h2 className="privacy-title">Enlaces a otros sitios web</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por nosotros. Si haces clic en un enlace de terceros, serás dirigido al sitio de ese tercero. Te recomendamos encarecidamente que revises la Política de Privacidad de cada sitio que visites.
                  </p>
                  <p>
                    No tenemos control ni asumimos ninguna responsabilidad por el contenido, políticas de privacidad o prácticas de sitios o servicios de terceros.
                  </p>
                </div>
              </section>

              <section id="cambios" className="privacy-section">
                <h2 className="privacy-title">Cambios a esta política</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    Podemos actualizar nuestra Política de Privacidad ocasionalmente. Te notificaremos sobre cualquier
                    cambio publicando la nueva Política de Privacidad en esta página y, si los cambios son
                    significativos, proporcionaremos un aviso más prominente.
                  </p>
                  <p>
                    Te informaremos a través de un aviso destacado en nuestro Servicio antes de que el cambio entre en vigor y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de Privacidad.
                  </p>
                  <p>
                    Te recomendamos revisar esta Política de Privacidad periódicamente para estar informado sobre cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
                  </p>
                </div>
              </section>

              <section id="contacto" className="privacy-section">
                <h2 className="privacy-title">Contacto</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p>
                    Si tienes preguntas o sugerencias sobre nuestra Política de Privacidad, no dudes en contactarnos:
                  </p>
                  <ul style={{
                    listStyleType: "disc",
                    paddingLeft: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}>
                    <li>Por correo electrónico:
                      <a
                        href="mailto:christianferrer.dev@gmail.com"
                        className="text-primary hover:underline"
                        style={{ marginLeft: "0.25rem" }}
                      >
                        christianferrer.dev@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
