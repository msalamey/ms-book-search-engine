const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ikeys0167:<ikey2233>@cluster0.akff4q6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});