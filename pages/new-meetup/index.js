import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
//  FETCH , this method always must be executed in the asynchronous procedure.

function NewMeetUpDetails() {
    const router = useRouter();
  async function handler3(details) {

    const response = await fetch("/api/new-meetup", {
      body: JSON.stringify(details),
      method: "POST",
      // also we include the headers description of the content type application
      headers: {
        "Content-type": "application/json",
      },
    });
    // incase if we want to see the reponse which we are getting we can await
    //-->> the typical response.json()

    const finalData = await response.json();
    console.log(finalData);
   

    router.push('/');
    

  }

  return (
    <Fragment>
      <Head>
        <title>New Restaurant</title>
        <meta
          content="Form for adding new meetup"
          description="Add Data for new Meetup"
        />
      </Head>
      <NewMeetupForm onAddMeetup={handler3} />
    </Fragment>
  );
}

export default NewMeetUpDetails;
