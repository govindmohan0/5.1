const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://govindmohan0:Tj0hoxlDeqGu0JW8@atlascluster.hvf8ucv.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todos = mongoose.model('todos', todoSchema);

module.exports = {
    todos
}
