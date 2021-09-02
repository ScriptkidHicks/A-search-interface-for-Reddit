import classes from "../css/HeaderPage.module.css";
import { useState } from "react";

function HeaderPage(props) {
  const [subred, setSubred] = useState("");
  function changeHandler(event) {
    setSubred(event.target.value);
  }

  return (
    <div>
      <header className={classes.mainContainer}>
        <h2>Welcome to the Maleable Reddit API</h2>
        <div className={classes.subreddit}>
          <label htmlFor="subreddit">Sub-Reddit</label>
          <input type="text" name="subreddit" onChange={changeHandler}></input>
        </div>
        <p className={classes.sortingLabels}>Select a sorting type</p>
        <div className={classes.sorting}>
          <div>
            <input
              onChange={changeHandler}
              type="radio"
              id="hot"
              name="sortingType"
              value="hot"
              checked
            ></input>
            <label htmlFor="hot">Hot</label>
          </div>
          <div>
            <input
              type="radio"
              id="new"
              name="sortingType"
              value="new"
              checked
            ></input>
            <label htmlFor="new">New</label>
          </div>
          <div>
            <input
              type="radio"
              id="top"
              name="sortingType"
              value="top"
              checked
            ></input>
            <label htmlFor="top">Top</label>
          </div>
        </div>
        <button
          className={classes.submitBtn}
          onClick={() => {
            props.updateSubreddit("DIY");
            console.log(subred);
          }}
        >
          Submit
        </button>
      </header>
    </div>
  );
}

export default HeaderPage;
