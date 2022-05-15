import ContactCard from '../../ContactCard/ContactCard';
import s from './contactsblock.module.scss'
import TelegramLogo from '../../../assets/TelegramLogo.svg'
import GmailLogo from '../../../assets/GmailLogo.svg'
import VKLogo from '../../../assets/VKLogo.svg'

const ContactsBlock = () => {
  return(
    <div className={`${s.contactBlock} container`}>
      <h1>Контакты</h1>
      <p>Свяжитесь с нами любым удобным для Вас способом</p>
      <div className={s.contacts}>
        <ContactCard data={{img: TelegramLogo.src, service: 'Telegram', address: '@catlense', cta: 'Написать в Telegram', link: 'https://t.me/catlense', color: '#28A8E9'}} />
        <ContactCard data={{img: GmailLogo.src, service: 'Email', address: 'hello@catlense.ru', cta: 'Написать на почту', link: 'mailto:hello@catlense.ru', color: '#FF6457'}} />
        <ContactCard data={{img: VKLogo.src, service: 'ВКонтакте', address: '@catlense', cta: 'Написать ВКонтакте', link: 'https://vk.me/catlense', color: '#0077FF'}} />
      </div>
      <div className={s.contactBackcall}>
        <div className={s.texts}>
          <h2>Оставьте заявку здесь</h2>
          <p>Если способы выше Вам не подходят, то заполните форму и мы свяжемся с Вами</p>
        </div>
        <button>Заполнить форму</button>
      </div>
    </div>
  )
}

export default ContactsBlock;