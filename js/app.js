const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');


dotenv.config();
const uri = process.env.DATABASE_URL;


function tokenGen(){
    var numbers =[1,2,3,4,5,6,7,8,9,0];
    var TokenId= "text";
    for(var x=0;x<4;x++){
        TokenId +=Math.floor(Math.random() * numbers.length);
    }
    return TokenId
}
const txtToken = tokenGen();

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server.
client.connect(err => {
  if (err) {
    console.log('Failed to connect to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB!');

  // Select the database and collection you want to work with.
  const db = client.db('<chat-txt>');
  const collection = db.collection('<chat-txt-an>');

  // Get the value of the textbox.
  const textboxValue = txtToken;

  // Create a new document object with the textbox value.
  const document = { value: textboxValue };

  // Insert the document into the collection.
  collection.insertOne(document, (err, result) => {
    if (err) {
      console.log('Failed to insert document:', err);
      return;
    }

    console.log('Document inserted successfully!');
  });


});
