import css from './FriendLis.module.css'

export const FriendList = ({ friends }) => {
 return  <ul className={css.friendList}> {
   friends.map(item => {
 return <li className={css.item} key={item.id}>
   <span className={`${css.status} ${item.isOnline ? css.onLine : css.offLine}`}></span>
         <img className={css.avatar} src={item.avatar} alt={item.name} width="80" />
         <p className={css.name}>{item.name}</p>
      </li>
    })
  }
</ul>
}