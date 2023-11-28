import css from './Statistics.module.css'

export const Statistics = ({ stats,title}) => {
  const GetRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return`rgb(${r},${g},${b})`
  }
  return <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.statLlist}>
      {stats.map(el => {
     return <li className={css.item} style={{background: GetRandomColor()}} key={el.id}>
      <span className={css.label}>{el.label}</span>
      <span className={css.percentage}>{el.percentage}%</span>
    </li>
  })}
    </ul>
    </section>
}
