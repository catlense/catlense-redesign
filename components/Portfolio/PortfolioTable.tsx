import s from './portfolio.module.scss'
import portfolioData from '../portfolio.data'
import PortfolioCard from '../PortfolioCard/PortfolioCard'

const PortfolioTable = () => {

  return(
    <div className={`container ${s.portfolioTable}`}>
      <h1>Портфолио</h1>
      <div className={s.portfolioCards}>
        {
          portfolioData ? portfolioData.map(e => {
            return <PortfolioCard data={e} />
          }) : <p>Произошла ошибка... Мы уже работаем над её исправлением</p>
        }
      </div>
    </div>
  )

}

export default PortfolioTable