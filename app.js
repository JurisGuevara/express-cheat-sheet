/**
 * express app
 */

// express library
const { request, response } = require('express')
const express = require('express')

// morgan middle ware
const morgan = require('morgan')

const app = express()

// express js (ejs) view engine
app.set('view engine', 'ejs')

// listen for requests on port 4000
app.listen(4000, console.log('listening on port 4000'))

// middleware for using css or js files
app.use(express.static('public'))

// middleware for logging network activity to console
app.use(morgan('dev'))

app.get('/', (request, response) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi.'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi.'},
    {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi.'},
  ]
  response.render('index', {title: 'Home', blogs})
})

app.get('/about', (request, response) => {
  response.render('about', {title: 'About'})
})

app.get('/about-not', (request, response) => {
  response.redirect('/about')
})

app.get('/blogs/create', (request, response) => {
  response.render('create', {title: 'New Blog'})
})

app.use((request, response) => {
  response.status(404).render('404', {title: '404'})
})
