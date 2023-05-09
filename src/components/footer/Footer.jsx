import React from 'react';
import novatechLogo from '../../assets/novatechLogo.png';
import style from './footer.module.css';
import {Link} from 'react-router-dom';

const Footer=(props)=> {
  const {lang, modeDL, textDL} = props;

  return (
    <>
       <section className={`pt-4 pb-5 container-fluid ${style.secFoot} text-white bgFootButt-${modeDL} border-top border-1 border-white`}>
        <div className="row mx-auto  mx-0 px-0">
          <article className="col-sm-12 col-md-4 mt-2 mb-1">
            <div className="navbar-brand d-flex align-items-center justify-content-center" href="./index.html">
              <div>
              <Link to="/home"><img className={`${style.icons} ${style.imgFooter}`} src={novatechLogo} alt="logoNova"/></Link>
                <h6 className="my-auto text-center">{lang.Footer.title}</h6>
              </div>
            </div>
            <div className="mt-1 d-flex justify-content-center ">
              <h5 className="my-auto ms-1 me-3 text-center m-2">{lang.Footer.subTitle}</h5>
              <div className='d-flex'>
                {/* le ponemos enlaces de fb ig y tw.. agregamos mas?? */}
              <a className={`nav-link ${style.icons} text-${textDL} text-decoration-none m-2 `} href="/#"> <i className="bi bi-facebook "></i></a>
              <a className={`nav-link ${style.icons} text-${textDL} text-decoration-none m-2 `} href="/#"> <i className="bi bi-instagram"></i></a>
              <a className={`nav-link ${style.icons} text-${textDL} text-decoration-none m-2 `} href="/#"> <i className="bi bi-twitter "></i></a>
            </div>
            </div>
          </article>
          <article className="col-sm-12 col-md-4 mt-2  mb-1 text-center">
            <h5>{lang.Footer.contact}</h5>

            <div className="d-flex justify-content-center">
              <div>
              <i className="bi bi-geo-alt"></i>
              </div>
              <div className="mx-2">
                <p className="mb-1">Gral. Paz 578 - San Miguel de Tucumán</p>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div>
              <i className="bi bi-telephone-forward"></i>
              </div>
              <div className="mx-2">
                <p className="mb-1">(+54) 381.....</p>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div>
              <i className="bi bi-envelope"></i>
              </div>
              <div className="mx-2">
                <p href="../views/error404.html" className="nav-link mb-1"
                  >contacto@gmail.com</p>
              </div>
            </div>
          </article>
          <article className={`col-sm-12 col-md-4 mt-2 mb-1 text-center text-white`}>
            <h5 >{lang.Footer.information}</h5>
            <Link className={`nav-link ${style.icons}`} to="/E404">{lang.Footer.questions}</Link>
            <Link className={`nav-link ${style.icons}`} to="/E404">{lang.Footer.atention}</Link>
            <Link className={`nav-link ${style.icons}`} to="/E404">{lang.Footer.term}</Link>
          </article>
        </div>
      </section>
      <div>
        <i className="fa-solid fa-arrow-up-long"></i>
      </div>
      <section className={`bgNav-${modeDL} py-1`}>
        <p className={`text-center text-white mb-0`}>
          &copy; {lang.Footer.already}
        </p>
      </section>
    </>


  )
}

export default Footer