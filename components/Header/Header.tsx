import s from './header.module.scss'
import Logo from '../../assets/catlense-logo'
import Link from 'next/link'
import React, { useState } from 'react'
import Burger from '../../assets/burger.svg'
import Close from '../../assets/close.svg'
import {Link as Reference} from 'react-scroll'
import { useRouter } from 'next/router'

const CustomLogo = React.forwardRef(({className}:any, ref) => {
  return(
    <Logo cRef={ref} className={className} />
  )
})

CustomLogo.displayName = 'CustomLogo'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return(
    <header className={`${s.mainHeader} container`}>
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
          <Reference to={'about'} smooth={true} onClick={() => {setMenuOpen(false);window.location.pathname === '/' || router.push('/#about')}}>О нас</Reference>
          <Reference to={'portfolio'} smooth={true} onClick={() => {setMenuOpen(false);window.location.pathname === '/' || router.push('/#portfolio')}}>Портфолио</Reference>
          <Reference to={'contacts'} smooth={true} onClick={() => {setMenuOpen(false);window.location.pathname === '/' || router.push('/#contacts')}}>Контакты</Reference>
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