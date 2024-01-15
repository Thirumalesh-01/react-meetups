import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";

// const COMPLETE_ITEMS_INFO = [
//   {
//     id: "m1",
//     image:
//       "https://th.bing.com/th/id/OIP.1TubNvwR54s7oy0sdAaKZAHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     title: "Hang Out Restaurant",
//     address: "4-149-87/A, Teachers Colony, Dhone",
//     description: "Best Known for the Pizzas",
//   },
//   {
//     id: "m2",
//     image:
//       "https://th.bing.com/th/id/OIP.-rjnHLPwa3aWgruv_G1FAQHaE8?rs=1&pid=ImgDetMain",
//     title: "Vinaya Indian and Chinese Cuisne",
//     address: "87-90-A , opposite to Bank, near Anna Spouch Cenre",
//     description: "Best Known for the Pizzas",
//   },
//   {
//     id: "m2",
//     image:
//       "https://th.bing.com/th/id/OIP.AFvhjAtUsIlRVe0gPWS0mwHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     title: "Western and Asian Multi Cuisine ",
//     address: "4-149-87/A, Bakers Street, oppoosite to Katam trink",
//     description: "Best Known for the Pizzas",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Thiru Restaurants</title>
        {/* and in the meta we add the respective content and also the description */}
        <meta
          content="Welcome to the Beautiful Meetups"
          description="Welcome to Beautiful Meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  //-->>so this is basically the server side code function , so here we try
  //-- to do server side activities like in this case connection or connecting
  //--> to mongodb

  const client = await MongoClient.connect("mongodb://0.0.0.0:27017");
  const db = client.db();
  const myCollection = db.collection("meetups");

  const meetups = myCollection.find().toArray();
  return {
    props: {
      meetups: (await meetups).map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
