import Link from 'next/link'
import s from './portfoliocard.module.scss'

const PortfolioCard = ({data, type}:any) => {
  return(
    <div className={`${s.portfolioCard} ${type === 'fullPortfolio' ? s.link : null}`}>
      <img src={data.img} className={s.image} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {
        type === 'fullPortfolio' ?
        <Link href={'/portfolio'}>Открыть портфолио</Link>
        :
        <Link href={`/blog/${data.link}`}>Подробнее</Link>

      }
    </div>
  )
}

export default PortfolioCard