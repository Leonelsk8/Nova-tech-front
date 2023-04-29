import './AboutUs.css';
const AboutUS = () => {
  let message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis eligendi rerum hic ducimus culpa quidem aperiam in nam sed eius, incidunt deserunt inventore suscipit accusantium`;
  return (
    <section className='section-white'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-md-12 text-center'>
            <h2 className='section-title'></h2>
            the team behind pacifico
          </div>
          <p className='section-subtitle'>{message}</p>

          <div className='col-sm-4 col-md-3'>
            <di className='card team-item'>
              <div className='text-center m-2'>
                <img src='/img/Leo.png' className='team-img' alt='imagen' />
              </div>
              <h3>Leonel Gomez</h3>
              <div className='team-info'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, debitis eligendi rerum hic ducimus culpa quidem
                aperiam in nam sed eius, incidunt deserunt inventore suscipit
                accusantium
              </p>

              <ul className='icon'>
                <div>
                  <a href='#' className='twitter'>
                  <i className="bi bi-twitter"></i>
                  </a>
                </div>

                <div>
                  <a href='#' className='whatsapp'>
                  <i className="bi bi-whatsapp"></i>

                  </a>
                </div>

                <div>
                  <a href='#' className='facebook'>
                  <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </ul>
            </di>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item'>
              <div className='text-center m-2'>
                <img src='/img/Ivan.png' className='team-img' alt='imagen' />
              </div>
              <h3>Ivan Economo</h3>
              <div className='team-info'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, debitis eligendi rerum hic ducimus culpa quidem
                aperiam in nam sed eius, incidunt deserunt inventore suscipit
                accusantium
              </p>

              <ul className='icon'>
                <div>
                  <a href='#' className='twitter'>
                  <i className="bi bi-twitter"></i>
                  </a>
                </div>

                <div>
                  <a href='#' className='whatsapp'>
                  <i className="bi bi-whatsapp"></i>
                  </a>
                </div>

                <div>
                  <a href='#' className='facebook'>
                  <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <div className='card team-item'>
              <div className='text-center m-2'>
                <img src='/img/Matias.png' className='team-img' alt='imagen' />
              </div>
              <h3>Matias Rosales</h3>
              <div className='team-info'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, debitis eligendi rerum hic ducimus culpa quidem
                aperiam in nam sed eius, incidunt deserunt inventore suscipit
                accusantium
              </p>

              <ul className='icon'>
                <div>
                  <a href='#' className='twitter'>
                  <i className="bi bi-twitter"></i>
                  </a>
                </div>

                <div>
                  <a href='#' className='whatsapp'>
                  <i className="bi bi-whatsapp"></i>
                  </a>
                </div>

                <div>
                  <a href='#' className='facebook'>
                  <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div className='col-sm-4 col-md-3'>
            <di className='card team-item'>
              <div className='text-center m-2'>
                <img src='/img/Carlos.png' className='team-img' alt='imagen' />
              </div>
              <h3>Pereyra Carlos</h3>
              <div className='team-info'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, debitis eligendi rerum hic ducimus culpa quidem
                aperiam in nam sed eius, incidunt deserunt inventore suscipit
                accusantium{' '}
              </p>

              <ul className='icon'>
                <div>
                  <a href='#' className='twitter'>
                  <i className="bi bi-twitter"></i>
                  </a>
                </div>

                <div>
                  <a href='#' className='whatsapp'>
                  <i className="bi bi-whatsapp"></i>
                  </a>
                </div>

                <div>
                  <a href='#' className='facebook'>
                  <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </ul>
            </di>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
