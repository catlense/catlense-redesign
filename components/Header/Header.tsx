import s from './header.module.scss'
import Logo from '../../assets/catlense-logo'
import Link from 'next/link'
import React, { useState } from 'react'
import Burger from '../../assets/burger.svg'
import Close from '../../assets/close.svg'

const CustomLogo = React.forwardRef(({className}:any, ref) => {
  return(
    <Logo cRef={ref} className={className} />
  )
})

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <header className={s.mainHeader}>
      <Link href={'/'}>
        <CustomLogo className={s.logo} />
      </Link>

      <div className={`${s.navbar} ${menuOpen && s.active}`}>
        <div className={s.upline}>
          <p>catlense</p>
          <img src={Close.src} alt="" className={s.close} onClick={() => setMenuOpen(false)} />
        </div>
        <div className={s.links}>
          <Link href={'/'}>Главная</Link>
          <Link href={'/'}>О нас</Link>
          <Link href={'/'}>Портфолио</Link>
          <Link href={'/'}>Отзывы</Link>
          <Link href={'/'}>Контакты</Link>
        </div>

        <div className={s.btnBackcall}>Обратный звонок</div>
      </div>

      <div className={s.openSidebar}>
        <img src={Burger.src} alt="" onClick={() => setMenuOpen(true)} />
      </div>

    </header>
  )
}

export default Header