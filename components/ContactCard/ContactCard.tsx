import Link from 'next/link';
import s from './contactcard.module.scss'

const ContactCard = ({data}:any) => {
  return(
    <div className={s.contactCard}>
      <img src={data.img} alt={data.service} />
      <h1 className={s.service}>{data.service}</h1>
      <p className={s.address}>{data.address}</p>
      <button className={s.cta} style={{background: data.color}}><a href={data.link} target="_blank">{data.cta}</a></button>
    </div>
  )
}

export default ContactCard;