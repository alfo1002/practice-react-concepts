
import './styles.css'

export const EventItem = ({ info, name, image, id, onHandleClick }) => {

    const handleSeeMoreClick = (e) => {
        e.stopPropagation()
        onHandleClick(id)
    }
    return (
        <div onClick={() => console.log("Padre Clickeado....")} className='event-item-container'>
            <img src={image} alt={name} width={200} height={200} />
            <div className='event-info-container'>
                <h4 className='event-name'>{name}</h4>
                <p className='event-info'>{info}</p>
                <button onClick={handleSeeMoreClick} className='see-more-btn'>Ver más ....</button>
            </div>
        </div>
    )
}
