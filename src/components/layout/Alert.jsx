import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import './Alert.css'
function Alert() {
    const {alert} = useContext(AlertContext);
  return alert!==null&&(
      <div className='Alert'>
           <p><strong>{alert.msg}</strong></p>
      </div>
  )
}

export default Alert
