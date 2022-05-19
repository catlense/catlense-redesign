import s from './portfolio.module.scss'

const LeftSideBar = ({data}:any) => {

  return(
    <div className={s.leftSidebar}>
      <img src={data?.img} alt="Project logotype" />
      <h2>{data?.subTitle}</h2>
      <a href={`https://${data?.title}`} rel="noreferrer" target="_blank">{data?.title}</a>
      <p>Заказчик: <a href={data?.customer.href} target="_blank" rel="noreferrer">{data?.customer.text}</a></p>
      <a style={{color: 'white'}} href={`https://${data?.title}`} rel="noreferrer" target="_blank"><button style={{background: data?.specColor}}>Открыть проект</button></a>
    </div>
  )

}

export default LeftSideBar