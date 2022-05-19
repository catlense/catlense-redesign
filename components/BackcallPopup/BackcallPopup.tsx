import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './backcallpopup.module.scss'
import config from '../config'

const BackcallPopup = () => {

  const openned = useSelector((state:any) => state.openBackcall)
  const dispatch = useDispatch()

  const [contact, setContact] = useState()
  const [question, setQuestion] = useState()

  const sendData = () => {
    fetch(encodeURI(`https://api.telegram.org/bot${config.token}/sendMessage?chat_id=${config.chat_id}&text=Новая заявка catlense.ru\n\n<b>Связь:</b> ${contact}\n<b>Вопрос:</b>: ${question}&parse_mode=html`))
  }

  return(
    <div className={`${s.bc_popupWrapper} ${openned && s.bc_visible}`}>
      <div className={s.popupContainer}>
        <div className={s.bc_close} onClick={() => {dispatch({type: 'backcallForm', payload: false})}}>&times;</div>
        <h1>Заявка обратной связи</h1>
        <p>Заполните форму, и мы свяжемся с Вами в кратчайшие сроки</p>
        <input type="text" placeholder="Как с Вами связаться" value={contact} onChange={({target}:any) => setContact(target.value)} />
        <input type="text" placeholder="Ваш запрос" value={question} onChange={({target}:any) => setQuestion(target.value)}  />
        <button onClick={sendData}>Отправить</button>
      </div>
    </div>
  )
}

export default BackcallPopup;