import HeaderPage from "./components/HeaderPage";
import BodyPage from "./components/BodyPage";
import { useState } from "react";

function App() {
  const [subreddit, setSubreddit] = useState("DIY");
  const [listingType, setListingType] = useState("hot");
  const [limitNumber, setLimitNumber] = useState("4");
  const [timeAllotment, setTimeAllotment] = useState("months");
  /* I will be adding the ability to change time alotment and limit in the future, for now lets just stick with the 
    top 4 in a month and go from there. */

  let endpoint = `https://www.reddit.com/r/${subreddit}/${listingType}.json?limit=${limitNumber}&t=${timeAllotment}`;
  return (
    <div>
      <HeaderPage
        updateSubreddit={setSubreddit}
        updateSorting={setListingType}
      />
      <BodyPage endpoint={endpoint} />
    </div>
  );
}

export default App;
