import s from './portfolio.module.scss'

const Content = ({data}:any) => {
  return(
    <div className={s.portfolioContent}>
      <h1>{data?.subTitle}</h1>
      <p className={s.description}>{data?.description}</p>
      <p>{data?.text}</p>
    </div>
  )
}

export default Content