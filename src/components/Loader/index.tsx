import s from './style.module.scss'

const Loader = () => {
  return (
    <div className={s.loader} data-testid="loader">
      <span></span>
    </div>
  )
}

export default Loader
