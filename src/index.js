
require("dotenv").config()
const {connectDB}  =  require("./db")
const express =  require("express")
const cors = require('cors'); 
const app =  express()
app.use(express.json())
app.use(cors());
const todosRouter =  require("./routes/todos")
connectDB()



app.use ("/api/todos" ,  todosRouter)









const PORT = process.env.PORT ||  8080; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});