
export const ListRendering = () => {

    const names = ['Juan', 'Pedro', 'Luis', 'Ana', 'Maria']

    return (
        <div>
            <span>Lista de nombres</span>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>

        </div>
    )
}
