import { GET_FRIEND_GROUPS } from './friend.type'
import { store } from '../../saga/store'

export const getFriendGroups =(data)=>  {
    const friendGroups = store.getState().group.listGroups.filter(group => group.member.includes(data.email))
    return {
        type: GET_FRIEND_GROUPS,
        friendGroups
    }  
}
