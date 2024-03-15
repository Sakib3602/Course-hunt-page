


const NavBar = () => {
  return (
    <div className="border-b  border-gray-600 ">
         <div className="navbar  font-madimi">
      

      <div className="navbar">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Home</a></li>
            <li>
            <summary>Our Courses</summary>
              <ul className="p-2">
                <li><a>Free Courses</a></li>
                <li><a>Paid Courses</a></li>
              </ul>
            </li>
            <li><a>Contact</a></li>
          </ul>
        </div>


        <a className="btn btn-ghost text-3xl text-[#494A72]">Crash Courses</a>
      </div>


      <div className="navbar  hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-[16px]">
          <li><a>Home</a></li>
          <li>
            <details>
              <summary>Our Courses</summary>
              <ul className="p-2">
              <li><a>Free Courses</a></li>
                <li><a>Paid Courses</a></li>
              </ul>
            </details>
          </li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-wide bg-[#20AD96] text-l text-white">Get your free guide now</button>
      </div>
    </div>
      
    </div>
  )
}

NavBar.propTypes = {

}

export default NavBar
