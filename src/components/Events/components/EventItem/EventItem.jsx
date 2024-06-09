
export const EventItem = ({ info, name, image, id, onHandleClick }) => {

    const handleSeeMoreClick = (e) => {
        e.stopPropagation()
        onHandleClick(id)
    }
    return (
        <div onClick={() => console.log("Padre Clickeado....")}>
            <img src={image} alt={name} width={200} height={200} />
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>Ver más ....</button>
        </div>
    )
}
