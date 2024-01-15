
import classes from "./MeetUpItemDetails.module.css"

const MeetUpItemDetails = (props)=>{

    return(
        <section className={classes.details}>
            <img src={props.image}  alt={props.title}/>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
   );

}

export default MeetUpItemDetails;