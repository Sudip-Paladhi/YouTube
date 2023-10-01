const Header = () => {
    return(
<div className="flex ">
<div className="flex md:p-4 md:w-2/12 gap-4">
<img src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="Menu" className="md:h-9"/>
<img src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png" alt="logo" className="md:h-6 md:mt-2 " />
</div>

<div className="flex md:mt-2 md:h-12 md:w-8/12 md:justify-center"> 
<input type="text" placeholder="Search" className="md:w-2/3 border border-gray-400 rounded-l-full md:pl-4 text-xl text-gray-600"/>
<button className=" border border-gray-400 rounded-r-full text-center"><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="search icon" className="md:h-6 md:mx-6" /></button>
<img src="https://static.thenounproject.com/png/4779497-200.png" alt="Search with voice" className="md:ml-5  rounded-full p-3 md:bg-slate-100"/>
</div>

<div className="flex md:mt-4 md:h-8 md:w-2/12 md:mr-4 md:justify-around">
<img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3231887/video-add-icon-sm.png" alt="video create" />
<img src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg" alt="Notification" />
<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" />
</div>
</div>
    );
};
export default Header;