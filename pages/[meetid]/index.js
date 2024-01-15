//-->> Here comes the description of like showing the each entity when user clicks the button

//-->> so we try to use the semantic way of aligning the things
//-->> Thus we use the section tag here, and that contains h1,img, and address tags

import { Fragment } from "react";
import MeetUpItemDetails from "../../components/meetups/MeetUpItemDetails";

import Head from "next/head";
import { MongoClient } from "mongodb";
const { ObjectId } = require('mongodb')
function eachItemDisplay(props) {
  return (
    <Fragment>
      <Head>
        <title>Hotel Details</title>
        <meta content="Info of specific meetup" description="MeetUP Info" />
      </Head>
      <MeetUpItemDetails
        image={props.meetupsDetailing.image}
        title={props.meetupsDetailing.title}
        address={props.meetupsDetailing.address}
        description={props.meetupsDetailing.description}
      />
    </Fragment>
  );
}

//-->> [meetid]
// here this page or the folder is very crucial as we see here that it is more specifically
// dynamic in nature so /{} , this things or the params must be prepreloaded
//-->> we here the StaticPath or the ServerPath Concept we typically use
//-->> SO, we create the paths which is the array, that contains the respective params

//-->> here the params are nothing but the ids which we get

export async function getStaticPaths(context) {
  const client = await MongoClient.connect("mongodb+srv://thirumalesh1602:thiruthi1622@cluster0.duwacwz.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db();
  const myData = db.collection("meetups");
  const idInfo =  await myData.find({}, { _id: 1 }).toArray();
client.close();
  return {
    fallback: "blocking",
    paths:idInfo.map((current)=>({
        params:{meetid: current._id.toString()}
    })),
};
}

export async function getStaticProps(context) {
  const meetid = context.params.meetid;
  //.meetid , since this is the [meetid] which is the name of the folder
  const client = await MongoClient.connect("mongodb+srv://thirumalesh1602:thiruthi1622@cluster0.duwacwz.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db();
  const myData = db.collection("meetups");
  const idInfo = await myData.findOne({ _id:  new ObjectId(meetid), });
client.close()
  return {
    props: {
      meetupsDetailing:{
        image:idInfo.image,
        address:idInfo.address,
        description:idInfo.description,
        title:idInfo.title,
        id:idInfo._id.toString()
      }
    },
  };
}
export default eachItemDisplay;
