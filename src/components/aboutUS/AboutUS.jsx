import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUS = (props) => {
  const { modeDL, textDL, lang } = props;
  return (
    <section className={`section-white  bg-${modeDL}`}>
      <div className='conteiner container-fluid'>
        <div className='row justify-content-between'>
          <div className='text-center'>
            <h2 className='section-title'></h2>
            <div className={`p-4 bgFootButt-${modeDL} text-white`}>
              <h1>{lang.Aboutus.title}</h1>
              <div>
                <small>
                  <h5>
                  {lang.Aboutus.parrafo}
                  </h5>
                </small>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-3 d-flex align-content-stretch flex-wrap'>
            <div className={`card team-item p-2 bg-${modeDL} text-${textDL}`}>
              <div className='text-center m-2'>
                <img src='/img/Leo.png' className='team-img' alt='imagen' />
              </div>
              <h3 className={`text-${textDL}`}>Leonel Gomez</h3>
              <div className='team-info'>
                <p className={`text-${textDL}`}>
                {lang.Aboutus.Leo}
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
          <div className='col-sm-4 col-md-3 d-flex align-content-stretch flex-wrap'>
            <div className={`card team-item p-2 bg-${modeDL} text-${textDL}`}>
              <div className='text-center m-2 text-black'>
                <img src='/img/Ivan.png' className='team-img' alt='imagen' />
              </div>
              <h3 className={`text-${textDL}`}>Ivan Economo</h3>
              <div className='team-info'>
                <p className={`text-${textDL}`}>
                {lang.Aboutus.Ivan}
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
          <div className='col-sm-4 col-md-3 d-flex align-content-stretch flex-wrap'>
            <div className={`card team-item p-2 bg-${modeDL} text-${textDL}`}>
              <div className='text-center m-2'>
                <img src='/img/Matias.png' className='team-img' alt='imagen' />
              </div>
              <h3 className={`text-${textDL}`}>Matias Rosales</h3>
              <div className='team-info'>
                <p className={`text-${textDL}`}>
                {lang.Aboutus.Matias}
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
          <div className='col-sm-4 col-md-3 d-flex align-content-stretch flex-wrap'>
            <div className={`card team-item p-2 bg-${modeDL} text-${textDL}`}>
              <div className='text-center m-2'>
                <img src='/img/Carlos.png' className='team-img' alt='imagen' />
              </div>
              <h3 className={`text-${textDL}`}>Pereyra Carlos</h3>
              <div className='team-info'>
                <p className={`text-${textDL}`}>
                {lang.Aboutus.Carlos}
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