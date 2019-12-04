const express = require('express'); // importing a CommonJS module
const helmet=require('helmet')

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

//custom Middleware
function logger(req,res,next) {
console.log(`${req.method} to ${req.originalUrl}`);
  next();
}

function gatekeeper(req,res,next){
  if (req.headers.password === mellon){
    next()
  } else {
    res.status(404)
    .json({error: 'password is incorrect'})
  }
}



server.use(helmet())
server.use(express.json());
server.use(logger)

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  server.get("/area51", helmet(), (req, res) => {
    res.send(req.headers);
  });

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});



module.exports = server;
