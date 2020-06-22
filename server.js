const express = require('express');
const people = require('./people.json');

const app = express();


app.set('view engine', 'pug');


//static files from public folder

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    people: people.profiles
  });
})

app.get('/profile', (req, res) => {
  const person = people.profiles.find(p=> p.id===req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });


/*axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    response.send(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });*/
  
  
  