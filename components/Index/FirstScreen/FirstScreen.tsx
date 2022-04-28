import s from './firstscreen.module.scss'
import {Navigation, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioCard from './PortfolioCard/PortfolioCard';
import Portfolio from '../../portfolio.data'

const FirstScreen = () => {
  return(
    <div className={s.firstScreen}>
      <div className={s.leftSide}>
        <h1>Мы создадим сайт Вашей мечты</h1>
        <p>Если Вам нужен лендинг, сайт для бизнеса или иной масштабный проект, то смело обращайтесь к нам</p>
        <button>Связаться с нами</button>
      </div>


      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        className={`indexPortfolioHead ${s.indexPortfolioHead}`}
        >

        {
          Portfolio.map(e => {
            return (
              <SwiperSlide key={Math.random() * 100}>
                <PortfolioCard img={e.img} title={e.title} description={e.description} link={e.link} specColor={e.specColor} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    
    </div>
  )

}

export default FirstScreen