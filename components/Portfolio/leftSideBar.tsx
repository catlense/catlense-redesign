import s from './portfolio.module.scss'

const LeftSideBar = ({data}:any) => {

  return(
    <div className={s.leftSidebar}>
      <img src={data?.img} alt="Project logotype" />
      <h2>{data?.subTitle}</h2>
      <a href={`https://${data?.title}`} rel="noreferrer" target="_blank">{data?.title}</a>
      <p>Дата разработки: {data?.date}</p>
      <a style={{color: 'white'}} href={data?.customLink || `https://${data?.title}`} rel="noreferrer" target="_blank"><button style={{background: data?.specColor}}>Открыть проект</button></a>
    </div>
  )

}

export default LeftSideBar