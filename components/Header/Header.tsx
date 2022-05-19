import s from './header.module.scss'
import Logo from '../../assets/catlense-logo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Burger from '../../assets/burger.svg'
import Close from '../../assets/close.svg'
import {Link as Reference} from 'react-scroll'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const CustomLogo = React.forwardRef(({className}:any, ref) => {
  return(
    <Logo cRef={ref} className={className} />
  )
})

CustomLogo.displayName = 'CustomLogo'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    menuOpen ? document.documentElement.style.overflowY = 'hidden' : document.documentElement.style.overflowY = 'auto'
  }, [menuOpen])

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

        <div className={s.btnBackcall} onClick={() => {dispatch({type: 'backcallForm', payload: true})}}>Обратный звонок</div>
      </div>

      <div className={s.openSidebar}>
        <img src={Burger.src} alt="" onClick={() => setMenuOpen(true)} />
      </div>

    </header>
  )
}

export default Header