let listEvents = []
let totalindicents = []
let indicent = []

exports.registerEventAboutTime = (sec, event) => {
    if(listEvents.length < 1){
        const contentNewEvent = {
            event_id: event.event_id,
            context: event.context,
            metadata: event.metadata,
            timestamp: event.timestamp
        }
        totalindicents.push(contentNewEvent)
        indicent.push(contentNewEvent)
        const NewEvent = {
            indicent_id: Math.random(),
            indicent : indicent
        }
        listEvents.push(NewEvent) 
        return listEvents
    }

    let metadataInEvents = totalindicents.find((evento) =>
        evento.metadata.includes(event.metadata)
    )
    console.log(metadataInEvents)

    if(metadataInEvents == undefined){    
            const contentNewEvent = {
                event_id: event.event_id,
                context: event.context,
                metadata: event.metadata,
                timestamp: event.timestamp
            }
            totalindicents.push(contentNewEvent)
            indicent.pop()
            indicent.push(contentNewEvent)
            const NewEvent = {
                indicent_id: Math.random(),
                indicent : indicent
            }
            listEvents.push(NewEvent) 
    }
    else{
        if(event.timestamp - metadataInEvents.timestamp < sec*1000){
            const contentNewEvent = {
                event_id: event.event_id,
                context: event.context,
                metadata: event.metadata,
                timestamp: event.timestamp
            }
            //Falta lograr recuperar el indicent_id para de esta forma conocer la posición en el arreglo general
            //de esta forma se accede a la posición del arreglo en listEvents y se hace push al contentNewEvent
            //en el arreglo indicent que esta en la posición indicada

            //let position = listEvents.indexOf(metadataInEvents.indicent_id)
            //listEvents[position].indicent.push(contentNewEvent) 
        }
    }

    return listEvents
}