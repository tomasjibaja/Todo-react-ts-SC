type Tarea = {
    tarea: string
    borrarTarea: () => void
}

const Tarea = ({ tarea, borrarTarea }) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar tarea</button>
        </div>
    )
}   

export default Tarea