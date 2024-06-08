
export const MyFirstComponent = ({ valor }) => {
    console.log(valor)
    return (
        <>
            <span>--------------</span>
            <div>MyFirstComponent</div>
            {<p>El contador es {valor}</p>}
        </>
    )
}
