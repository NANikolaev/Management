const server=require ("express")();
const PORT = process.env.PORT || 5000;


require('./configurations/mongo-db')();
require('./configurations/express')(server);
require('./configurations/routes')(server);



server.listen(PORT,console.log(`Server listening on port ${PORT}`))