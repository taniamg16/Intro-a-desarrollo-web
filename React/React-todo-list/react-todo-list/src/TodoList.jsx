    import { useEffect, useState } from "react";

// Componente para representar un ítem de la lista
// Creado como funcion con declaración clásica
function ListItem({ id, completado, texto, cambiaValor }) {
  return (
    <li>
      <input
        className="form-check-input"
        type="checkbox"
        checked={completado}
        id={`check-${id}`}
        // Cuando se le da click al elemento, se llama a la función cambiaValor pasada como prop
        // Lo correcto sería usar onChange en lugar de onClick para inputs de tipo checkbox
        // INCISO 2 DE TAREA: USAR ONCHANGE EN LUGAR DE ONCLICK
        onChange={() => cambiaValor()}
      />
      <span>{texto}</span>
    </li>
  );
}

// INCISO 3 DE LA TAREA: 
// onAdd es una que se pasa como prop al componente hijo NewItemsForm
function NewItemsForm({ onAdd }) {
    const [texto, setTexto] = useState(""); // Estado para el texto del nuevo elemento

    const agregar = () => {
    const limpio = texto.trim(); // el trim quita espacios al inicio y final
    if (limpio === "") return; // si no hay nada no hace nada

    onAdd(limpio); // si hay algo se agrega
    setTexto("");
  };
  // regresa el formulario para agregar nuevos elementos
   return (
    <div>
      <input
        value={texto}
        // cada tecla que se presionas actualiza el estado texto
        onChange={(tecleo) => setTexto(tecleo.target.value)}
      />
      <button onClick={agregar}>Agregar</button>
    </div>
  );
}

// Componente principal de la lista de tareas
// Creado como función con expresión de función flecha
export const TodoList = () => {
  // Estado para las tareas. Se usa useState para manejar la variable de estado 'tareas'
  // El usar useState permite que se recuerde el valor entre renderizados y que al cambiar el valor
  // se vuelva a renderizar el componente
  const [tareas, setTareas] = useState([
    { id: 1, completado: true, texto: "Aprender HTML" },
    { id: 2, completado: false, texto: "Aprender CSS" },
  ]);

  // Estado para la última hora de cambios
  const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");

  // INCISO 3 DE LA TAREA: Función para agregar una nueva tarea
  const agregaTarea = (texto) => {
  setTareas((listaAnterior) => [
        ...listaAnterior,
        { id: Date.now(), completado: false, texto: texto },
    ]);
  };

  // Efecto secundario para actualizar la última hora de cambios cuando las tareas cambian
  useEffect(() => {
    const cambio = new Date().toLocaleTimeString();
    setUltimaHoraDeCambios(cambio);
  }, [tareas]);

  // Función para cambiar el estado de una tarea por su ID
  // Lo correcto sería usar un map en lugar de find y filter para evitar mutaciones directas
  // INCISO 1 DE TAREA: USAR .MAP EN LUGAR DE FIND Y FILTER
  const cambiaTareaPorId = (id) => {
    setTareas((arregloPrevio) => {
      const arregloModificado = arregloPrevio.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completado: !tarea.completado };
        }
        return tarea;
      });
      return arregloModificado;
    });
  };

  return (
    <>
      <div>
        <h1>Todo list</h1>

        
        <NewItemsForm onAdd={agregaTarea} />

        {tareas.map((tarea) => (
          <ListItem
            key={tarea.id}
            id={tarea.id}
            completado={tarea.completado}
            texto={tarea.texto}
            cambiaValor={() => cambiaTareaPorId(tarea.id)}
          />
        ))}
      </div>
      <div>Ultimo cambio: {ultimaHoraDeCambios}</div>
    </>
  );
};
export default TodoList;