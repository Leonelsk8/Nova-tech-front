import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUS = () => {
  return (
    <section className='section-white'>
      <div className='conteiner container-fluid'>
        <div className='row justify-content-between'>
          <div className='text-center'>
            <h2 className='section-title'></h2>
            <div className='banner'>
              <h1>Sobre Nosotros</h1>
              <div>
                <small>
                  <h5>
                    ¡Bienvenidos a nuestra tienda de electrodomésticos! Somos
                    una empresa apasionada por la tecnología y comprometida con
                    brindar a nuestros clientes la mejor experiencia de compra.
                    En nuestro amplio catálogo encontrarás una variedad de
                    marcas y modelos, todos cuidadosamente seleccionados para
                    asegurarnos de ofrecerte la mejor calidad y rendimiento. Nos
                    enfocamos no solo en ofrecerte productos de alta calidad,
                    sino también una experiencia de compra única y
                    satisfactoria. Te invitamos a que nos visites y descubras
                    todo lo que tenemos para ofrecerte. ¡Te esperamos con los
                    brazos abiertos!
                  </h5>
                </small>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item p-2'>
              <div className='text-center m-2'>
                <img src='/img/Leo.png' className='team-img' alt='imagen' />
              </div>
              <h3>Leonel Gomez</h3>
              <div className='team-info'>
                <p>
                  Edad: 22 Años Estudiante: Desarrollo Web (rolling Code)
                  Estudiante de ingeniería en sistemas de información, razón que
                  me motivó a hacer Code school. Y ahora mi mayor pasatiempo es
                  programar porque es algo que me gusta. Tengo bases de
                  programación gracias a la carrera de Ingeniería.
                </p>
                <div className='d-flex justify-content-center'>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-whatsapp'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item p-2'>
              <div className='text-center m-2 text-black'>
                <img src='/img/Ivan.png' className='team-img' alt='imagen' />
              </div>
              <h3>Ivan Economo</h3>
              <div className='team-info'>
                <p>
                  Edad: 27 Años Estudiante: Desarrollo Web (rolling Code)
                  Empezando mí camino como desarrollador. Mi objetivo es
                  especializarme y conocer a fondo las herramientas de
                  desarrollo para poder crear estructuras complejas de manera
                  profunda y profesional.
                </p>
                <div className='d-flex justify-content-center'>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-whatsapp'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item p-2'>
              <div className='text-center m-2'>
                <img src='/img/Matias.png' className='team-img' alt='imagen' />
              </div>
              <h3>Matias Rosales</h3>
              <div className='team-info'>
                <p>
                  Edad: 27 Años Estudiante: Desarrollo Web (rolling Code). Soy
                  estudiante de Ingenieria y empecé en RollingCode para ampliar
                  mis conocimientos sobre lenguajes de programación.
                </p>
                <div className='d-flex justify-content-center'>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-whatsapp'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item p-2'>
              <div className='text-center m-2'>
                <img src='/img/Carlos.png' className='team-img' alt='imagen' />
              </div>
              <h3>Pereyra Carlos</h3>
              <div className='team-info'>
                <p>
                  Edad: 34 Años Estudiante: Desarrollo Web (rolling Code)
                  Actualmente trabajando de seguridad privada, no tengo definido
                  que hacer al finalizar el cursado, pero con grandes
                  expectátivas de cambiar mi futuro.
                </p>
                <div className='d-flex justify-content-center'>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='/' className='m-2 text-black'>
                      <i className='bi bi-whatsapp'></i>
                    </Link>
                  </div>
                  <div>
                    <Link href='/' className='m-2 text-black'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;