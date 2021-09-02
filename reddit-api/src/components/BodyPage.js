import classes from "../css/BodyPage.module.css";
import CardMaker from "./CardMaker";
import { useEffect, useState } from "react";

function BodyPage(props) {
  let theendpoint = props.endpoint;

  const [childrenData, setChildrenData] = useState([]);

  useEffect(() => {
    fetch(theendpoint)
      .then((result) => result.json())
      .then((siteData) => {
        setChildrenData(siteData.data.children);
        console.log(childrenData.length);
        console.log(childrenData);
        console.log(typeof childrenData);
      });
  }, [theendpoint]);

  return (
    <div className={classes.bodyFrame}>
      {childrenData.map((child) => (
        <CardMaker
          titleCard={child.data.title}
          redditLink={child.data.url}
          author={child.data.author}
        />
      ))}
    </div>
  );
}

export default BodyPage;
