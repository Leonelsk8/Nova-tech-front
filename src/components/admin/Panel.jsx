import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import style from './admin.module.css';
import CreateProduct from './products/CreateProduct';
import EditProduct from './products/EditProduct';
import DeleteProduct from './products/DeleteProduct';
import ModifyOfferts from './products/ModifyOfferts';
import ListUser from './users/ListUser';
import Messages from './users/Messages';
import SuspendUser from './users/SuspendUser';

const Panel = (props) => {
  const {modeDL, textDL, lang, token} = props
  const [panel, setPanel] = useState(1);

  return (
    <>
      <Container fluid className={`bg${modeDL} py-5 sectOrigin`}>
        <Row className='px-2 px-md-4 mb-3'>
          <Col xs={12} md={12} lg={12} className={`text-center rounded text-white p-3 bgFootButt-${modeDL}`}>
            <h2>{lang.admin.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={3} className={`bgFootButt-${modeDL} d-md-flex justify-content-md-around d-lg-block px-0 text-white py-5`}>
            <div className='d-flex flex-column'>
              <h3 className='ps-3'>{lang.admin.titleProd}</h3>
              <button className={panel === 1 ? `mt-3 ps-3 py-2 ${style.buttPanelActive}` : `mt-3 ps-3 py-2 ${style.buttPanel}`} onClick={()=>setPanel(1)}><i className="bi bi-bag-plus"></i> {lang.admin.prodOpcone}</button>
              <button className={panel === 2 ? `mt-3 ps-3 py-2 ${style.buttPanelActive}` : `mt-3 ps-3 py-2 ${style.buttPanel}`} onClick={()=>setPanel(2)}><i className="bi bi-bag-check"></i> {lang.admin.prodOpctwo}</button>
              <button className={panel === 3 ? `mt-3 ps-3 py-2 ${style.buttPanelActive}` : `mt-3 ps-3 py-2 ${style.buttPanel}`} onClick={()=>setPanel(3)}><i className="bi bi-bag-dash"></i> {lang.admin.prodOpctree}</button>
              <button className={panel === 4 ? `mt-3 ps-3 py-2 ${style.buttPanelActive}` : `mt-3 ps-3 py-2 ${style.buttPanel}`} onClick={()=>setPanel(4)}><i className="bi bi-bag-heart"></i> {lang.admin.prodOpcfor}</button>
            </div>
            <div className='d-flex flex-column'>
              <h3 className='ps-3 mt-5 mt-md-0 mt-lg-5'>{lang.admin.titleUser}</h3>
              <button className={panel === 5 ? `mt-3 ps-3 py-2 ${style.buttPanelActive}` : `mt-3 ps-3 py-2 ${style.buttPanel}`} onClick={()=>setPanel(5)}><i className="bi bi-people"></i> {lang.admin.userOpcone}</button>
              <button className={panel === 6 ? `mt-3 ps-3 py-2 ${style.buttPanelActive}` : `mt-3 ps-3 py-2 ${style.buttPanel}`} onClick={()=>setPanel(6)}><i className="bi bi-person-dash"></i> {lang.admin.userOpctwo}</button>
              <button className={panel === 7 ? `mt-3 ps-3 py-2 ${style.buttPanelActive}` : `mt-3 ps-3 py-2 ${style.buttPanel}`} onClick={()=>setPanel(7)}><i className="bi bi-chat-left-dots"></i> {lang.admin.userOpctree}</button>
            </div>

          </Col>
          <Col xs={12} md={12} lg={9} className={`bgCardBan-${modeDL} px-3 py-5 px-md-5 text-${textDL}`}>
            {
              panel === 1 ? <CreateProduct token={token} modeDL={modeDL} textDL={textDL} lang={lang} style={style}/> :
              panel === 2 ? <EditProduct token={token} modeDL={modeDL} textDL={textDL} lang={lang} style={style}/> : 
              panel === 3 ? <DeleteProduct token={token} modeDL={modeDL} textDL={textDL} lang={lang} style={style}/> :
              panel === 4 ? <ModifyOfferts token={token} modeDL={modeDL} textDL={textDL} lang={lang} style={style}/> :
              panel === 5 ? <ListUser token={token} modeDL={modeDL} textDL={textDL} lang={lang} style={style}/> :
              panel === 6 ? <SuspendUser token={token} modeDL={modeDL} textDL={textDL} lang={lang} style={style}/> :
              <Messages token={token} modeDL={modeDL} textDL={textDL} lang={lang} style={style}/>
            }
            
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Panel