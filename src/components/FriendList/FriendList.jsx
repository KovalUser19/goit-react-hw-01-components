import css from './FriendLis.module.css'
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {

  return <ul className={css.friendList}>
    {friends.map(item => <FriendListItem friend={item} key={item.id } />)}
</ul>
}