const Header = () => {
  return (
    <div className="flex flex-col md:h-36 bg-white  
    sticky top-0 z-50  
    ">
    <div className="flex ">
      <div className="flex md:p-4 md:ml-3 md:w-2/12 gap-6">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Menu"
          className="md:h-10"

        />
        <img
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="logo"
          className="md:h-6 md:mt-2 "
        />
      </div>

      <div className="flex md:mt-2 md:h-12 md:w-8/12 md:justify-center">
        <input
          type="text"
          placeholder="Search"
          className="md:w-2/3 border border-gray-400 rounded-l-full md:pl-4 text-xl text-gray-600"
        />
        <button className=" border border-gray-400 rounded-r-full text-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
            alt="search icon"
            className="md:h-6 md:mx-6"
          />
        </button>
        <img
          src="https://static.thenounproject.com/png/4779497-200.png"
          alt="Search with voice"
          className="md:ml-5  rounded-full p-3 md:bg-slate-100"
        />
      </div>

      <div className="flex md:mt-4 md:h-8 md:w-2/12 md:mr-4 md:justify-around">
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

    <div className="flex">
    <div className='md:w-1/12'>
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

    <div className="w-11/12">
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    <button className="bg-gray-100 md:p-2 md:m-3 rounded md:text-xl">Javascript</button>
    </div>
    </div>
    </div>
  );
};
export default Header;
