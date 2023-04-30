import './AboutUs.css';

const AboutUS = () => {
  let message = `Somos un gran equipo bien especializados, siempre trabajando y pensando en ud en nuetra gente, nuestro publico.`;
  return (
    <section className='section-white'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-md-12 text-center'>
            <h2 className='section-title'></h2>
            Siempre Pensando en ud equipo Nova Tech
          </div>
          <p className='section-subtitle'>{message}</p>
          <div className='col-sm-4 col-md-3'>
            <di className='card team-item'>
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
                <ul className='icon'>
                  <div>
                    <a href='#' className='twitter'>
                      <i className='bi bi-twitter'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='whatsapp'>
                      <i className='bi bi-whatsapp'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='facebook'>
                      <i className='bi bi-facebook'></i>
                    </a>
                  </div>
                </ul>
              </div>
            </di>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item'>
              <div className='text-center m-2'>
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
                <ul className='icon'>
                  <div>
                    <a href='#' className='twitter'>
                      <i className='bi bi-twitter'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='whatsapp'>
                      <i className='bi bi-whatsapp'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='facebook'>
                      <i className='bi bi-facebook'></i>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item'>
              <div className='text-center m-2'>
                <img src='/img/Matias.png' className='team-img' alt='imagen' />
              </div>
              <h3>Matias Rosales</h3>
              <div className='team-info'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, debitis eligendi rerum hic ducimus culpa quidem
                  aperiam in nam sed eius, incidunt deserunt inventore suscipit
                  accusantium
                </p>
                <ul className='icon'>
                  <div>
                    <a href='#' className='twitter'>
                      <i className='bi bi-twitter'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='whatsapp'>
                      <i className='bi bi-whatsapp'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='facebook'>
                      <i className='bi bi-facebook'></i>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <di className='card team-item'>
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
                <ul className='icon'>
                  <div>
                    <a href='#' className='twitter'>
                      <i className='bi bi-twitter'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='whatsapp'>
                      <i className='bi bi-whatsapp'></i>
                    </a>
                  </div>
                  <div>
                    <a href='#' className='facebook'>
                      <i className='bi bi-facebook'></i>
                    </a>
                  </div>
                </ul>
              </div>
            </di>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
