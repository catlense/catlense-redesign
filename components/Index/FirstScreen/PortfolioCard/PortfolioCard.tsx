import Link from 'next/link'
import s from './portfoliocard.module.scss'

const PortfolioCard = ({img, title, description, link, specColor, imgStyle}:any) => {
  return(
    <div className={s.portfoliocard}>
      <img src={img} alt="Project logotype" className={s.image} style={imgStyle} />
      <h1 style={{color: specColor}}>{title}</h1>
      <p>{description}</p>
      <Link href={`/portfolio/${link}`}>Подробнее</Link>
    </div>
  )
}

export default PortfolioCard