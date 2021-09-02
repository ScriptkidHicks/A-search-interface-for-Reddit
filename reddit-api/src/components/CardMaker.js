import classes from "../css/CardMaker.module.css";

function CardMaker(props) {
  return (
    <div className={classes.cardFrame}>
      <div className={classes.author}>Author: {props.author}</div>
      <a className={classes.redditLink} href={props.redditLink}>
        {props.redditLink}
      </a>
      <div className={classes.title}>{props.titleCard}</div>
    </div>
  );
}

export default CardMaker;
