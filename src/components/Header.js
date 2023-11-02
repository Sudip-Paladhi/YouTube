import { useEffect, useState } from "react";
import { toogleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cachResults } from "../utils/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    // const timer = setTimeout(() => getSearchSuggestion(), 200);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      cachResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div
      className="flex flex-col md:h-14 bg-white  
    sticky top-0 z-50  
    "
    >
      <div className="flex ">
        <div className="flex md:p-3 md:ml-3 md:w-2/12 gap-6">
          <img
            onClick={() => toogleMenuHandler()}
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt="Menu"
            className="md:h-7 cursor-pointer"
          />
          <img
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="logo"
            className="md:h-5 md:mt-2 "
          />
        </div>

        <div className="md:w-6/12 md:ml-32 md:mt-2">
          <div className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              placeholder="Search"
              className="md:w-[34rem] md:py-2 border border-gray-400 rounded-l-full md:pl-4 text-gray-600"
            />
            <button className="md:py-2 border border-gray-400 rounded-r-full text-center bg-slate-50">
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                alt="search icon"
                className="md:h-5 md:mx-6 "
              />
            </button>
          </div>
          {showSuggestion && (
            <div>
              <ul className=" bg-white md:shadow-lg">
                {suggestion.map((input) => (
                  <li key={input} className="md:ml-5">
                    🔍 {input}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="md:w-2/12 md:mt-2 md:ml-5">
          <img
            src="https://static.thenounproject.com/png/4779497-200.png"
            alt="Search with voice"
            className="md:h-10 rounded-full p-3 md:bg-slate-100"
          />
          <div></div>
        </div>
        <div className="flex md:mt-4 md:h-6 md:w-2/12 md:justify-end md:gap-5  md:mr-6">
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3231887/video-add-icon-sm.png"
            alt="video create"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg"
            alt="Notification"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
