import classes from "../css/HeaderPage.module.css";
import { useState } from "react";

function HeaderPage(props) {
  const [subred, setSubred] = useState("");
  const [sorting, setSorting] = useState("");
  function changeHandler(event) {
    setSubred(event.target.value);
  }

  function onChangeValue(event) {
    setSorting(event.target.value);
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
        <div className={classes.sorting} onChange={onChangeValue}>
          <input type="radio" value="top" name="sorting" /> Top
          <br />
          <input type="radio" value="new" name="sorting" /> New
          <br />
          <input type="radio" value="hot" name="sorting" /> Hot
        </div>
        <button
          className={classes.submitBtn}
          onClick={() => {
            props.updateSubreddit(subred);
            props.updateSorting(sorting);
          }}
        >
          Submit
        </button>
      </header>
    </div>
  );
}

export default HeaderPage;
