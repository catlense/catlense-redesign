import s from './portfolioblock.module.scss'
import portfolioData from '../../portfolio.data';
import PortfolioCard from '../../PortfolioCard/PortfolioCard';
import ShoppingBag from '../../../assets/shopping-bag.svg'

const PortfolioBlock = () => {
  return(
    <div className={`container ${s.portfolioBlock}`} id="portfolio">
      <h1>Портфолио</h1>
      <div className={s.portfolioContainer}>
        {
          portfolioData.map(
            e => {
              return(<PortfolioCard key={Math.random() * 100} data={e} />)
            }
          )
        }
        <PortfolioCard data={{
          title: 'Остальные работы',
          description: 'Это - не всё. Посмотрите наше портфолио на специальной странице',
          img: ShoppingBag.src
        }} type={'fullPortfolio'} />
      </div>
    </div>
  )
}

export default PortfolioBlock;