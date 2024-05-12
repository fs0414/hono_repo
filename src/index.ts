import { Hono } from 'hono'
import testFile from '../assets/IMG_9481.jpg'
// import View from './view'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default { 
  port: 3000, 
  fetch: app.fetch, 
}

const data = Bun.file(testFile);

app.post('/upload', async (c) => {
  const { 
    name 
  } = await c.req.json();
  
  const data = await Bun.file(testFile);
  
  console.log(data)
  
  return c.json(data);
})

app.get('/page', async(c) => {
  const filePath = testFile
  console.log(data)
  return c.html(
      `
      <body>
        <h1>Hello Hono!</h1>
        <img src="${data}" alt="tonyu">
      </body>
      `
  )
})