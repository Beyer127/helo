require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env
const authCtrl = require('./controllers/authController')
const ctrl = require('./controllers/postController')


app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('connected to db')
}).catch(err => console.log(err))

app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

app.get('/api/posts', ctrl.getPosts)
app.post('/api/post', ctrl.addPost)
app.put('/api/post/:id', ctrl.editPost)
app.delete('/api/post/:id', ctrl.deletePost)


app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`))

