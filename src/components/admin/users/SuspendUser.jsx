import {useState, useEffect} from 'react';
import {abledUser, disabledUser, getEmailUser} from '../../../API/Api';
import Loader from '../../loader/Loader';
import { customAlert } from '../../../assets/utils/alters';

const SuspendUser = (props) => {
  const {modeDL, textDL, lang, token, style} = props;
  const [search, setSearch] = useState('');
  const [userSearch, setUserSearch] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setUserSearch(null);
    setLoading(true);
    if(search !== ''){
      await getEmailUser(search, token)
      .then((resp)=>{setUserSearch(resp.data); setLoading(false)})
      .catch((error)=>console.log(error))
    }else{
      setUserSearch([])
    }
  }

  const handleChange = (e)=>{
    setSearch(e.target.value);
  }

  const sendDisabled = async(id, token, disabled)=>{
    if(disabled){
      await abledUser(id, token)
      .then((resp)=>{customAlert(lang.suspendUsers.alertOne, lang.suspendUsers.alertTextOne, 'success', 'Ok', ()=>{})})
      .catch((error)=>console.log(error))
    }else{
      await disabledUser(id, token)
      .then((resp)=>{customAlert(lang.suspendUsers.alertTwo, lang.suspendUsers.alertTextTwo, 'success', 'Ok', ()=>{})})
      .catch((error)=>console.log(error))
    }
  }

  return (
    <div>
      <h2>{lang.suspendUsers.title}</h2>
      <div>
        <div className='mt-3'>
          <form className={`d-flex`} role="search" onSubmit={handleSubmit}>
            <input type="search" className="form-control me-2 me-lg-0" placeholder={lang.Store.search} onChange={handleChange}/>
            <button className={`bgNav-${modeDL} butt butt-${modeDL} text-white`} type='submit'>{lang.Store.search}</button>
          </form>
          {
            userSearch !== null ? userSearch.length !== 0 ? userSearch.map((user, index)=>(
              <div key={index}>
                <button className={`${style.buttOffert} mb-2`} onClick={()=>sendDisabled(user._id, token, user.disabled)}>
                <div className='animate__animated animate__zoomIn'>
                  <div className='row'>
                    <div className='col-12 p-3'>
                      <p><b>{lang.listUser.name}:</b> {user.name}</p>
                      <p><b>{lang.listUser.lastName}:</b> {user.lastName}</p>
                      <p><b>{lang.listUser.email}:</b> {user.email}</p>
                      <p><b>{lang.listUser.suspended}:</b> {user.disabled ? lang.listUser.susConfirmed : 'No' }</p>
                    </div>
                  </div>
                </div>
                <div className={style.bacck}></div>
                </button>
            </div>)) : <div className='text-center pt-4'><h5>{lang.admin.notResult}</h5></div> : isLoading ? <Loader/> : <div></div>
          }
        </div>
      </div>
    </div>
  
  )
}

export default SuspendUser