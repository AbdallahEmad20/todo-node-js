
require("dotenv").config()
const {connectDB}  =  require("./db")
const express =  require("express")
const app =  express()
app.use(express.json())
const todosRouter =  require("./routes/todos")
connectDB()



app.use ("/api/todos" ,  todosRouter)









const PORT = process.env.PORT ||  8080; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});