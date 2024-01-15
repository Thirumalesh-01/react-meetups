import { MongoClient } from "mongodb/lib";

 async function handlingInfo(req,res){

    const client =  await MongoClient.connect("mongodb://0.0.0.0:27017");
    const db = client.db();
    const myCollection = db.collection("meetups");

    if(req.method = "POST"){
       const meetupInfo = req.body;
       myCollection.insertOne(meetupInfo)
    }
    res.send({message: "Successful"})
}


export default handlingInfo;