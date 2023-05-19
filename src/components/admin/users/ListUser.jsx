import {useState,useEffect} from 'react';
import {getAllusers} from '../../../API/Api';
import Loader from '../../loader/Loader';

const ListUser = (props) => {
  const {modeDL, textDL, lang, token, style} = props;
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    const resp = async()=>{
      await getAllusers(token)
      .then((response)=>{setUsers(response.data); setLoading(false)})
      .catch((error)=>console.log(error))
    }
    resp();
  }, [])

  return (
    <div>
      <h2 className='mb-4'>{lang.listUser.title}</h2>
      <div>
        {
          isLoading ? <Loader/> :
          <div className={`mb-1 rouded`}>
            <table className={`${style.tabled}`}>
              <thead>
                <tr className={`${style.tableheader} bgFootButt-${modeDL}`}>
                  <th>{lang.listUser.name}</th>
                  <th>{lang.listUser.lastName}</th>
                  <th>{lang.listUser.email}</th>
                  <th>{lang.listUser.suspended}</th>
                </tr>
              </thead>
              <tbody>
              {
                users.map((date, index)=>(
                  <tr key={index} className={`text-dark`}>
                    <td>{date.name}</td>
                    <td>{date.lastName}</td>
                    <td>{date.email}</td>
                    <td>{date.disabled ? lang.listUser.susConfirmed : 'No'}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          
        }
      </div>
    </div>
  )
}

export default ListUser