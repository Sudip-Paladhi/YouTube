import React from 'react'

const MainContainer = () => {
  return (
    <div className=''>
    <div className='md:w-1/12'>
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
    <li className="flex md:gap-5 md:text-lg md:font-semibold hover:bg-gray-100 rounded-lg md:p-3">
    {" "}
    <img
      src="https://cdn-icons-png.flaticon.com/512/8291/8291168.png"
      alt="library"
      className="md:h-7"
    />{" "}
    Library
  </li>
  </ul>
    </div>
    <div>
    </div>
    </div>
  )
}

export default MainContainer;