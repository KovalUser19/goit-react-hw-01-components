import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
  return <table className={css.transactionHistory}>
  <thead className={css.theard}>
    <tr className={css.tr}>
        <th>Type</th>
        <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody className={css.tbody}>
    {items.map(item => { return(
        <tr className={css.trBody} key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      )
    })}
      </tbody>
    </table>
}