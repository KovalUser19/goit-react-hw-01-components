import css from './FriendLis.module.css';

export const FriendListItem = ({ friend }) => {
  return <li className={css.item}>
    <span className={`${css.status} ${friend.isOnline ? css.onLine : css.offLine}`}></span>
    <img className={css.avatar} src={friend.avatar} alt={friend.name} width="80" />
    <p className={css.name}>{friend.name}</p>
  </li>
}