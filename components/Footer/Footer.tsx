import Link from 'next/link'
import React from 'react'
import Logo from '../../assets/catlense-logo'
import s from './footer.module.scss'

const CustomLogo = React.forwardRef(({className}:any, ref) => {
  return(
    <Logo cRef={ref} className={className} />
  )
})

CustomLogo.displayName = 'CustomLogo'

const Footer = () => {
  return(
    <footer className={s.footer}>
      <CustomLogo className={s.logo} />
      <div className={s.links}>
        <a href="https://vk.com/catlense" target="_blank" rel="noreferrer">VK</a>
        <a href="https://t.me/catlense-ru" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://discord.gg/3utTAsCEZR" target="_blank" rel="noreferrer">Discord</a>
        <a href="https://github.com/catlense-ru" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <Link href="/">catlense.ru</Link>
    </footer>
  )
}

export default Footer;