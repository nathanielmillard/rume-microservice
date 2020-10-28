const express = require('express');
const app = express();
const cors = require('cors');

// Designate the port this server will run through
app.set('port', process.env.port || 3001);

// Declare app-level middleware
app.use(express.json());
app.use(cors());

// Define the information stored in app.locals -
// you can add as many key/value pairs to the app.locals object as you wish!
app.locals.title = 'Rume Microservice Server';
app.locals.reflections = []

// Declare Reflections endpoints here 👇
app.post('/api/v1/reflections', (request, response) => {
  const requiredProperties = [ "reflection", "mood", "date" ];
  const receivedProperties = Object.keys(request.body);
  for (let property of requiredProperties) {
    if (!receivedProperties.includes(property)) {
      return response.status(422).json({error: `Cannot POST: missing property ${property} in request.`});
    }
  }
  const newReflection = {
    ...request.body,
    id: app.locals.reflections.length
  }
  app.locals.reflections.push(newReflection);
  return response.status(201).json({ newReflection: newReflection });
})

app.get('/api/v1/reflections', (request, response) => {
  response.status(200).json({ reflections: app.locals.reflections });
})

// Listen for queries to this server
app.listen(app.get('port'), () => console.log(`${app.locals.title} is now listening on port ${app.get('port')}!`));
