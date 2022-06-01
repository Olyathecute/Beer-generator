import style from './Loader.module.scss'

export default function Loader() {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}>Loading...</div>
    </div>
  )
}
