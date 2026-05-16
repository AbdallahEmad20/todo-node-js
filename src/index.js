
require("dotenv").config()
const  PORT =  process.env.port
const {connectDB}  =  require("./db")
const express =  require("express")
const app =  express()
app.use(express.json())
const todosRouter =  require("./routes/todos")
connectDB()



app.use ("/api/todos" ,  todosRouter)









app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});