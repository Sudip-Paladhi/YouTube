import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? (
    <div className="md:w-1/12">
      <ul className="md:p-5 ">
        <li className="flex flex-wrap bg-gray-100 rounded-lg">
          <img
            src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building.png"
            alt="home logo"
            className="md:h-7 md:ml-3"
          />{" "}
          Home
        </li>
        <li className="flex md:flex-wrap md:gap-1 text-center hover:bg-gray-100 rounded-lg">
          {" "}
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2"
            alt="shorts logo"
            className="md:h-8 md:ml-3"
          />{" "}
          Shorts
        </li>
        <li className="flex flex-wrap hover:bg-gray-100 rounded-lg ">
          {" "}
          <img
            src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
            alt="subscriptions"
            className="md:h-7 md:ml-3"
          />{" "}
          Subcriptions
        </li>
        <li className="flex md:flex-wrap hover:bg-gray-100 rounded-lg ">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/8291/8291168.png"
            alt="library"
            className="md:h-7 md:ml-3"
          />{" "}
          Library
        </li>
      </ul>
    </div>
  ) : (
    <>
      <div className="md:w-[300px] shadow-lg z-50 bg-white">
        <ul className="md:p-5 border-b-2">
          <li className="flex md:gap-5 md:text-lg md:font-semibold bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building.png"
              alt="home logo"
              className="md:h-7"
            />{" "}
            Home
          </li>
          <li className="flex md:gap-5 md:text-lg md:font-semibold hover:bg-gray-100 rounded-lg md:p-3">
            {" "}
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2"
              alt="shorts logo"
              className="md:h-8"
            />{" "}
            Shorts
          </li>
          <li className="flex md:gap-5 md:text-lg md:font-semibold hover:bg-gray-100 rounded-lg md:p-3">
            {" "}
            <img
              src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
              alt="subscriptions"
              className="md:h-7"
            />{" "}
            Subcriptions
          </li>
        </ul>

        <ul className="md:p-5">
          <li className="flex md:gap-5 md:text-lg md:font-semibold hover:bg-gray-100 rounded-lg md:p-3">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/8291/8291168.png"
              alt="library"
              className="md:h-7"
            />{" "}
            Library
          </li>
          <li className="flex md:gap-4 md:text-lg md:font-semibold hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lETNO8-z7fisX_lwFiE9rept84VR50nEnBuNiRlR2UpgVBCsdKJTnERxMsYt87G26lU&usqp=CAU"
              alt="history"
              className="md:h-8"
            />{" "}
            History
          </li>
          <li className="flex md:gap-4 md:text-lg md:font-semibold hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://www.seekpng.com/png/detail/340-3407858_timing-play-logo-video-icon-bouton-retour-au.png"
              alt="videos"
              className="md:h-5"
            />{" "}
            Your videos
          </li>
          <li className="flex md:gap-5 md:text-lg md:font-semibold hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp"
              alt="watch later"
              className="md:h-7"
            />{" "}
            Watch later
          </li>
          <li className="flex md:gap-5 md:text-lg md:font-normal hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Like-icon.png"
              alt="liked"
              className="md:h-7"
            />{" "}
            Liked videos
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
