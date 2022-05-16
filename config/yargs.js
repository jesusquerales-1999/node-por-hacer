let descripcion = {
    demand: true,
    alias:'d',
    Desc:'Descripicion de la tarea por hacer'
}

let completado = { 
    alias:'c',
    default:true,
    Desc:'marca como completado o pendiente la tarea'
}

const argv =require('yargs')
    .command('crear','craer un elemneto por hacer',{descripcion})
    .command('actualizar','actualiza el estado completado',{descripcion,completado})
    .command('borrar','borra un elemento',{descripcion})
        .help()
        .argv;

        module.exports = {
        argv
        };