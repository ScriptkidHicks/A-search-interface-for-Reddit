import HeaderPage from "./components/HeaderPage";
import BodyPage from "./components/BodyPage";
import { useState } from "react";

function App() {
  const [subreddit, setSubreddit] = useState("gonewildaudio");
  const [listingType, setListingType] = useState("hot");
  const [limitNumber, setLimitNumber] = useState("4");
  const [timeAllotment, setTimeAllotment] = useState("months");

  let endpoint = `https://www.reddit.com/r/${subreddit}/${listingType}.json?limit=${limitNumber}&t=${timeAllotment}`;
  return (
    <div>
      <HeaderPage updateSubreddit={setSubreddit} />
      <BodyPage endpoint={endpoint} />
    </div>
  );
}

export default App;
