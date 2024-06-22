
import { Link } from 'react-router-dom'
import './styles.css'
import HearthFilled from '../../../../assets/hearth-filled.png'
import HearthUnFilled from '../../../../assets/hearth-unfilled.png'
import { useLikeEvents } from '../../../../hooks/useLikeEvents'

export const EventItem = ({ info, name, image, id, onHandleClick }) => {
    const { isEventLiked, tooggleEventLike } = useLikeEvents(id)
    const handleSeeMoreClick = (e) => {
        e.stopPropagation()
        onHandleClick(id)
    }
    const handleHearthClick = () => {
        console.log("Hearth Clickeado....")
        tooggleEventLike()
    }

    return (
        <div onClick={() => console.log("Padre Clickeado....")} className='event-item-container'>
            <div className='imageContainer'>
                <img src={isEventLiked ? HearthFilled : HearthUnFilled} alt='HearthFilled button' className='hearthImage' onClick={handleHearthClick} />
                <img src={image} alt={name} width={200} height={200} />
            </div>
            <div className='event-info-container'>
                <h4 className='event-name'>{name}</h4>
                <p className='event-info'>{info}</p>
                <button onClick={handleSeeMoreClick} className='see-more-btn'>Ver más ....</button>
                {/*<Link to={`/detail/${id}`} className='see-more-btn'>Ver más ....</Link>*/}
            </div>
        </div>
    )
}
