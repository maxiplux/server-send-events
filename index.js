const app = require("express")();
let indicator = 0;
app.get("/", (req, res) => res.send("To test open console and type let eventSource1= new EventSource('http://localhost:8080/stream'); eventSource1.onmessage=console.log this example is the same for webflux "));
//https://developer.mozilla.org/es/docs/Server-sent_events/utilizando_server_sent_events_sse


app.get("/stream", (request, response) => {

    response.setHeader("Content-Type", "text/event-stream");

    const send = (stream) => {
        stream.write("data: " + JSON.stringify({ indicator: indicator++, msg: 'Here a message' }) + '\n\n');
        setTimeout(() => send(stream), 1000);
    }
    send(response);
    // this example is comming from https://www.youtube.com/watch?v=4HlNv1qpZFY
})



app.listen(8080)
console.log("Listening on 8080")