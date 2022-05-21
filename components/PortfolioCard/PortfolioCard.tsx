import Link from 'next/link'
import s from './portfoliocard.module.scss'

const PortfolioCard = ({data, type}:any) => {
  return(
    <div className={`${s.portfolioCard} ${type === 'fullPortfolio' ? s.link : ""}`}>
      <img src={data.img} className={s.image} style={data.imgStyle} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {
        type === 'fullPortfolio' ?
        <Link href={'/portfolio'}>Открыть портфолио</Link>
        :
        <Link href={`/portfolio/${data.link}`}>Подробнее</Link>

      }
    </div>
  )
}

export default PortfolioCard