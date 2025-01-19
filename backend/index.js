/* entry point of the app, starts the server using app configuration from app.js
-> handles server-level logic
-> handles env variables
-> not reused typically */

const app = require('./app')
const {PORT} = process.env

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}...`);
    
})