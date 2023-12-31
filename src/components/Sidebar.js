import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? (
    <div className="md:bg-fixed">
      <ul className="md:p-2">
        <li className="md:w-14 py-3 bg-gray-100 rounded-lg text-[11px] text-center">
          <img
            src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building.png"
            alt="home logo"
            className="md:h-6 md:ml-3"
          />{" "}
          Home
        </li>
        <li className=" hover:bg-gray-100 md:w-14 py-3 rounded-lg text-[11px] text-center">
          {" "}
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2"
            alt="shorts logo"
            className="md:h-8 md:ml-3"
          />{" "}
          Shorts
        </li>
        <li className=" hover:bg-gray-100 md:w-14 py-3 rounded-lg text-[10px] text-center">
          {" "}
          <img
            src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
            alt="subscriptions"
            className="md:h-5 md:ml-4"
          />{" "}
          Subcriptions
        </li>
        <li className=" hover:bg-gray-100 md:w-14 py-3 rounded-lg text-[11px] text-center ">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/8291/8291168.png"
            alt="library"
            className="md:h-5 md:ml-4"
          />{" "}
          Library
        </li>
      </ul>
    </div>
  ) : (
    <>
      <div className="md:w-[310px] shadow-lg bg-white md:bg-fixed">
        <ul className="md:p-3 border-b-2">
          <li className="md:w-[210px] flex md:gap-5 md:font-semibold bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building.png"
              alt="home logo"
              className="md:h-5"
            />{" "}
            Home
          </li>
          <li className="flex md:gap-5 hover:bg-gray-100 rounded-lg md:p-3">
            {" "}
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2"
              alt="shorts logo"
              className="md:h-8"
            />{" "}
            Shorts
          </li>
          <li className="flex md:gap-5  hover:bg-gray-100 rounded-lg md:p-3">
            {" "}
            <img
              src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
              alt="subscriptions"
              className="md:h-6"
            />{" "}
            Subcriptions
          </li>
        </ul>

        <ul className="md:p-5">
          <li className="flex md:gap-5  hover:bg-gray-100 rounded-lg md:p-3">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/8291/8291168.png"
              alt="library"
              className="md:h-6"
            />{" "}
            Library
          </li>
          <li className="flex md:gap-4  hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lETNO8-z7fisX_lwFiE9rept84VR50nEnBuNiRlR2UpgVBCsdKJTnERxMsYt87G26lU&usqp=CAU"
              alt="history"
              className="md:h-6"
            />{" "}
            History
          </li>
          <li className="flex md:gap-4  hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://www.seekpng.com/png/detail/340-3407858_timing-play-logo-video-icon-bouton-retour-au.png"
              alt="videos"
              className="md:h-4"
            />{" "}
            Your videos
          </li>
          <li className="flex md:gap-5  hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp"
              alt="watch later"
              className="md:h-6"
            />{" "}
            Watch later
          </li>
          <li className="flex md:gap-5 hover:bg-gray-100 rounded-lg md:p-3">
            <img
              src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Like-icon.png"
              alt="liked"
              className="md:h-6"
            />{" "}
            Liked videos
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
