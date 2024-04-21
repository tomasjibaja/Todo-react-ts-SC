import Tarea from './Tarea'

type ListaTareas = {
    listaTareas : string[]
    borrarTarea: (index: number) => void
}

const ListaTareas = ({ listaTareas, borrarTarea }: Props) => {
    return (
        <div className="tasklist">
            {listaTareas.map((tarea, index) => (
                <Tarea
                key={index} 
                tarea={tarea} 
                borrarTarea={() => borrarTarea(index)} />
                )
            )}
        </div>
    )
}

export default ListaTareas