import s from './aboutblock.module.scss'
import Logo from '../../../assets/catlense-logo'
import React from 'react'

const CustomLogo = React.forwardRef(({className}:any, ref) => {
  return(
    <Logo cRef={ref} className={className} />
  )
})

CustomLogo.displayName = 'CustomLogo'

const AboutBlock = () => {
  return(
    <div className={`${s.aboutContainer} container`} id="about">
      <div className={s.leftSide}>
        <h2>Кто мы</h2>
        <h1>О нас</h1>
        <p>Мы - команда разработчиков, дизайнеров и менеджеров, которые горят своим делом и хотят сделать современный интернет максимально эстетичным, полезным и удобным для всех.</p>
        <p>Наша цель - помочь Вам с реализацией Ваших идей, целей и планов по сайту. Мы идём на встречу по заранее неоговоренным моментам, при создании пользуемся современными технологиями, которые в итоге сделают Ваш сайт максимально приятным и быстрым для пользователей</p>
      </div>
      <div className={s.logoSide}>
        <CustomLogo className={s.image} />
      </div>
    </div>
  )
}

export default AboutBlock