## Endpoints

The server will run locally on `http://localhost:3001`

| URL Path  | Verb | Required Data | Sample Response (Happy Path) |
|-----------|------|---------------|------------------------------|
| `/api/v1/reflections` | GET | N/A | `{reflections: [{reflection:<String>, date: <String>, mood: <String>, id: <Number>}, {...}, ...] }`  |
| `/api/v1/reflections` | POST | `{ reflection: <String>, modd: <String>}` | `{newReflection: {reflection:<String>, date: <String>, mood: <String>, id: <Number>}`  |

## Links

- [Rume App this is made for](https://github.com/nathanielmillard/stretch)

- [Where Rume-Microservice is currently deployed](https://rume-microservice.herokuapp.com/api/v1/reflections)
