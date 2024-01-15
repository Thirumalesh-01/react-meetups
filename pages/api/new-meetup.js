import { MongoClient } from "mongodb/lib";

 async function handlingInfo(req,res){

    const client =  await MongoClient.connect("mongodb+srv://thirumalesh1602:thiruthi1622@cluster0.duwacwz.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const myCollection = db.collection("meetups");

    if(req.method = "POST"){
       const meetupInfo = req.body;
       myCollection.insertOne(meetupInfo)
    }
    res.send({message: "Successful"})
}


export default handlingInfo;