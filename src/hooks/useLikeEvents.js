import { useState } from 'react'
import { LIKED_EVENTS_STORAGE_KEY } from '../utils/constants'

//const LIKE_EVENTS_STORAGE_KEY = 'likedEvents'

const checkIsEventLiked = (eventId) => {
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
    return likedEvents?.includes(eventId)
}

export const useLikeEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId))

    const tooggleEventLike = () => {
        console.log("Tooggle..........")
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
        const eventIndex = likedEvents.indexOf(eventId)

        if (eventIndex !== -1) {
            likedEvents.splice(eventIndex, 1)
            setIsEventLiked(false)
        } else {
            likedEvents.push(eventId)
            setIsEventLiked(true)
        }
        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents))
    }

    return {
        isEventLiked,
        tooggleEventLike,
    }
}
