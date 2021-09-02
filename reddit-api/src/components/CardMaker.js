import classes from "../css/CardMaker.module.css";

function CardMaker(props) {
  let stringMaxLength = 68;

  return (
    <div className={classes.cardFrame}>
      <div className={classes.author}>Author: {props.author}</div>
      <a className={classes.redditLink} href={props.redditLink}>
        {props.redditLink.length <= stringMaxLength
          ? props.redditLink
          : props.redditLink.substring(0, stringMaxLength)}
      </a>
      <div className={classes.title}>{props.titleCard}</div>
    </div>
  );
}

export default CardMaker;
