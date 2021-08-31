import 'dotenv/config'
import express from 'express';
import {userController} from './app/controllers/UserController'

const app = express(); 
app.use(express.json())
app.post('/users', userController.store)
app.get('/', (req, res) => {
    res.send('Hello word')
})


app.listen(3333, ()=> { console.log('Server is running')})