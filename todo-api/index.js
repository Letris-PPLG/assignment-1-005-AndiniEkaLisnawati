import express, { json } from "express";
const app = express();
const port = 5001 || process.env.port;
app.use(express.json());

const message = [{
    msg: "API berjalan normal",
    code: 200
}]

const todos = [
    { "id": 1, "title": "Belajar Node.js", "done": false },
    { "id": 2, "title": "Belajar Express.js", "done": true }
  ]

app.get('/', (req, res) => {
    res.status(200).json(message)
})

app.get('/todos', (req, res) => {
    res.status(200).json(todos)
})

app.post('/todos', (req, res) => {
    const {title, done} = req.body;
    if(!title){
        console.log("input  is required!")
    }
    const newTodo = {id: todos.length + 1, title: title, done: done};
    todos.push(newTodo)
    res.status(201).json(newTodo);

})

app.put('/todos/:id', (req, res)=> {
    const {id} = req.params;
    let {title, done} = req.body;
    if(!title){
        console.log("title is required!")
    }
    let newTodo = {id: id, title: title, done: done}
    todos.splice(id,1)
    todos.push(newTodo)
    res.status(200).json(newTodo)
})


app.listen(port, ()=> {
    console.log(`server berjalan di http://localhost:${port}`)
})


// AMBIL DATA YANG MAU DIUPDATE APA
// AMBIL ID DARI PARAMS