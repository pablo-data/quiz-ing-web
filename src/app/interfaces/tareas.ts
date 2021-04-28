export interface Tareas {
    id: number;
    titulo: string;
    estado: string;
}

export const ListaTareas: Array<Tareas> = [
    {
        id: 1,
        titulo: 'tarea 1',
        estado:'Iniciada'
    },
    {
        id: 2,
        titulo: "tarea 2",
        estado:"En proceso"
    },
    {
        id: 3,
        titulo: "Tarea 3",
        estado:"Terminado"
    },
    {
        id: 4,
        titulo: "Estudiar 4",
        estado:"Iniciada"
    },
];