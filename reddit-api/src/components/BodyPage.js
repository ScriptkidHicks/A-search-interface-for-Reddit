import classes from "../css/BodyPage.module.css";
import CardMaker from "./CardMaker";
import { useEffect, useState } from "react";

function BodyPage(props) {
  let theendpoint = props.endpoint;

  const [theAuthor, setTheAuthor] = useState(null);
  const [theLink, setTheLink] = useState(null);
  const [theTitle, setTheTitle] = useState(null);

  useEffect(() => {
    fetch(theendpoint)
      .then((result) => result.json())
      .then((siteData) => {
        console.log(siteData.data.children[0].data.author);
        setTheAuthor(siteData.data.children[0].data.author);
        setTheTitle(siteData.data.children[0].data.title);
        setTheLink(siteData.data.children[0].data.url);
      });
  });

  return (
    <div className={classes.bodyFrame}>
      <CardMaker redditLink={theLink} author={theAuthor} titleCard={theTitle} />
    </div>
  );
}

export default BodyPage;
