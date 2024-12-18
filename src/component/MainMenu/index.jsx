import React, { useEffect, useState } from "react";
import ProtoTypes from "prop-types";
import FontAwesome from "../uiStyle/FontAwesome";
import tempIcon from "../../assets/img/icon/temp.png";
import { Link, NavLink } from "react-router-dom";
import SearchModal from "../SearchModal";
import SidebarMenu from "../SidebarMenu";
import useWeatherAndDate from "../WeatherDate";

const menus = [
  {
    id: 1,
    linkText: "Home",
    child: false,
    // icon: "angle-down",
  },
  {
    id: 2,
    linkText: "About",
    child: false,
    link: "/about",
    // icon: "angle-down",
  },
  {
    id: 3,
    linkText: "Cybershield",
    child: false,
    link: "/about",
    // icon: "angle-down",
  },
  {
    id: 4,
    linkText: "Categories",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 41,
        link: "/business",
        linkText: "Cybersecurity",
      },
      {
        id: 42,
        link: "/entertainment",
        linkText: "Software Development",
      },
      {
        id: 43,
        link: "/features",
        linkText: "DevOps",
      },
      {
        id: 44,
        link: "/sports",
        linkText: "Data Analysis",
      },
      {
        id: 45,
        link: "/trending",
        linkText: "Trending",
      },
    ],
  },
  {
    id: 5,
    linkText: "Contact",
    child: false,
    link: "/contact",
    // icon: "angle-down",
  },
  // {
  //   id: 2,
  //   linkText: "Pages",
  //   child: true,
  //   icon: "angle-down",
  //   submenu: [
  //     {
  //       id: 21,
  //       link: "/about",
  //       linkText: "About",
  //     },
  //     {
  //       id: 22,
  //       link: "/archive",
  //       linkText: "Archive",
  //     },
  //     {
  //       id: 23,
  //       link: "/contact",
  //       linkText: "Contact Us",
  //     },
  //     {
  //       id: 24,
  //       link: "/404",
  //       linkText: "404",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   linkText: "Posts",
  //   child: true,
  //   icon: "angle-down",
  //   submenu: [
  //     {
  //       id: 31,
  //       child: true,
  //       linkText: "General Posts",
  //       third_menu: [
  //         {
  //           id: 311,
  //           link: "/post1",
  //           linkText: "Post 1",
  //         },
  //         {
  //           id: 312,
  //           link: "/post2",
  //           linkText: "Post 2",
  //         },
  //         {
  //           id: 313,
  //           link: "/post3",
  //           linkText: "Post 3",
  //         },
  //       ],
  //     },
  //     {
  //       id: 32,
  //       child: true,
  //       linkText: "Video Posts",
  //       third_menu: [
  //         {
  //           id: 321,
  //           link: "/video_post1",
  //           linkText: "Video Style 1",
  //         },
  //         {
  //           id: 322,
  //           link: "/video_post2",
  //           linkText: "Video Style 2",
  //         },
  //         {
  //           id: 323,
  //           link: "/video_post3",
  //           linkText: "Video Style 3",
  //         },
  //       ],
  //     },
  //     {
  //       id: 33,
  //       child: true,
  //       linkText: "Audio Posts",
  //       third_menu: [
  //         {
  //           id: 331,
  //           link: "/audio_post1",
  //           linkText: "Audio Style 1",
  //         },
  //         {
  //           id: 332,
  //           link: "/audio_post2",
  //           linkText: "Audio Style 2",
  //         },
  //         {
  //           id: 333,
  //           link: "/audio_post3",
  //           linkText: "Audio Style 3",
  //         },
  //       ],
  //     },
  //     {
  //       id: 34,
  //       child: true,
  //       linkText: "Sidebars",
  //       third_menu: [
  //         {
  //           id: 341,
  //           link: "/post1",
  //           linkText: "Right Sidebar",
  //         },
  //         {
  //           id: 342,
  //           link: "/left_post2",
  //           linkText: "Left Sidebar",
  //         },
  //         {
  //           id: 343,
  //           link: "/post2",
  //           linkText: "No Sidebar",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
const menusDark = [
  {
    id: 1,
    linkText: "Home",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 11,
        link: "/",
        linkText: "Home 1",
      },
      {
        id: 12,
        link: "/dark",
        linkText: "Home Dark",
      },
      {
        id: 13,
        new: true,
        link: "/home-two",
        linkText: "Home 2",
      },
      {
        id: 14,
        link: "/home-three",
        linkText: "Home 3",
      },
    ],
  },
  {
    id: 2,
    linkText: "Pages",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 21,
        link: "/dark/about",
        linkText: "About",
      },
      {
        id: 22,
        link: "/dark/archive",
        linkText: "Archive",
      },
      {
        id: 23,
        link: "/dark/contact",
        linkText: "Contact Us",
      },
      {
        id: 24,
        link: "/dark/404",
        linkText: "404",
      },
    ],
  },
  {
    id: 3,
    linkText: "Posts",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 31,
        child: true,
        linkText: "General Posts",
        third_menu: [
          {
            id: 311,
            link: "/dark/post1",
            linkText: "Post 1",
          },
          {
            id: 312,
            link: "/dark/post2",
            linkText: "Post 2",
          },
          {
            id: 313,
            link: "/dark/post3",
            linkText: "Post 3",
          },
        ],
      },
      {
        id: 32,
        child: true,
        linkText: "Video Posts",
        third_menu: [
          {
            id: 321,
            link: "/dark/video_post1",
            linkText: "Video Style 1",
          },
          {
            id: 322,
            link: "/dark/video_post2",
            linkText: "Video Style 2",
          },
          {
            id: 323,
            link: "/dark/video_post3",
            linkText: "Video Style 3",
          },
        ],
      },
      {
        id: 33,
        child: true,
        linkText: "Audio Posts",
        third_menu: [
          {
            id: 331,
            link: "/dark/audio_post1",
            linkText: "Audio Style 1",
          },
          {
            id: 332,
            link: "/dark/audio_post2",
            linkText: "Audio Style 2",
          },
          {
            id: 333,
            link: "/dark/audio_post3",
            linkText: "Audio Style 3",
          },
        ],
      },
      {
        id: 34,
        child: true,
        linkText: "Sidebars",
        third_menu: [
          {
            id: 341,
            link: "/dark/post1",
            linkText: "Right Sidebar",
          },
          {
            id: 342,
            link: "/dark/left_post2",
            linkText: "Left Sidebar",
          },
          {
            id: 343,
            link: "/dark/post2",
            linkText: "No Sidebar",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    linkText: "Categories",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 41,
        link: "/dark/business",
        linkText: "Business",
      },
      {
        id: 42,
        link: "/dark/entertainment",
        linkText: "Entertainment",
      },
      {
        id: 43,
        link: "/dark/features",
        linkText: "Features",
      },
      {
        id: 44,
        link: "/dark/sports",
        linkText: "Sports",
      },
      {
        id: 45,
        link: "/dark/trending",
        linkText: "Trending",
      },
    ],
  },
  {
    id: 5,
    linkText: "World",
    link: "/dark/world",
  },
  {
    id: 6,
    linkText: "Sports",
    link: "/dark/sports",
  },
  {
    id: 7,
    linkText: "Contact",
    link: "/dark/contact",
  },
];

const MainMenu = ({ className, dark }) => {
  const [searchShow, setSearchShow] = useState(false);
  const [sideShow, setSideShow] = useState(false);
  // Destructure weather, dateTime, and location from the hook
  const { weather, dateTime, location } = useWeatherAndDate();

  // UseEffect to log weather and location when they update
  useEffect(() => {
    if (weather !== null) {
      console.log("Current weather:", weather); // Log the weather
    }
  }, [weather]); // This will run whenever weather updates

  // Optionally, log the location when it updates
  useEffect(() => {
    if (location !== "...") {
      console.log("Current location:", location); // Log the location
    }
  }, [location]); // This will run whenever location updates
  const arr = dark ? menusDark : menus;
  return (
    <>
      <div className={`main-menu ${className ? className : ""}`} id="header">
        <Link to="#top" className="up_btn up_btn1">
          <FontAwesome name="chevron-double-up" />
        </Link>
        <div className="main-nav clearfix is-ts-sticky">
          <div className="container">
            <div className="row justify-content-between">
              <nav className="navbar navbar-expand-lg col-lg-8 align-self-center">
                <div className="site-nav-inner">
                  <button
                    className="navbar-toggler"
                    onClick={() => setSideShow(true)}
                  >
                    <FontAwesome name="bars" />
                  </button>
                  <div
                    id="navbarSupportedContent"
                    className="collapse navbar-collapse navbar-responsive-collapse"
                  >
                    <ul className="nav navbar-nav" id="scroll">
                      {arr.length > 0
                        ? arr.map((item, i) => (
                            <li
                              key={i}
                              className={`
                                                ${item.child ? "dropdown" : ""}
                                                nav-item`}
                            >
                              {item.child ? (
                                <NavLink
                                  onClick={(e) => e.preventDefault()}
                                  to="/"
                                  className="menu-dropdown"
                                  data-toggle="dropdown"
                                >
                                  {item.linkText}
                                  <FontAwesome name={item.icon} />
                                </NavLink>
                              ) : (
                                <NavLink
                                  to={item.link}
                                  className="menu-dropdown"
                                  data-toggle="dropdown"
                                >
                                  {item.linkText}{" "}
                                  <FontAwesome name={item.icon} />
                                </NavLink>
                              )}

                              {item.child ? (
                                <ul className="dropdown-menu" role="menu">
                                  {item.submenu.map((sub_item, i) => (
                                    <li
                                      key={i}
                                      className={`${
                                        sub_item.child
                                          ? "dropdown-submenu"
                                          : null
                                      }
                                                        `}
                                    >
                                      {sub_item.child ? (
                                        <NavLink
                                          onClick={(e) => e.preventDefault()}
                                          to="/"
                                        >
                                          {sub_item.linkText}
                                        </NavLink>
                                      ) : (
                                        <NavLink to={sub_item.link}>
                                          {sub_item.linkText}
                                        </NavLink>
                                      )}
                                      {sub_item.third_menu ? (
                                        <ul className="dropdown-menu">
                                          {sub_item.third_menu.map(
                                            (third_item, i) => (
                                              <li key={i}>
                                                <NavLink to={third_item.link}>
                                                  {third_item.linkText}
                                                </NavLink>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      ) : null}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <SidebarMenu
                    sideShow={sideShow}
                    setSideShow={setSideShow}
                    menus={arr}
                  />
                </div>
              </nav>
              <div className="col-lg-4 align-self-center">
                <div className="menu_right d-flex align-items-center justify-content-end">
                  <div className="users_area d-flex align-items-center">
                    <ul className="inline d-flex align-items-center mb-0">
                      <li
                        className="search_btn me-3" // Added margin to separate icons
                        onClick={() => setSearchShow(!searchShow)}
                      >
                        <FontAwesome name="search" />
                      </li>
                      <li>
                        <FontAwesome name="user-circle" />
                      </li>
                    </ul>
                  </div>
                  <div className="lang d-none d-xl-block ms-4">
                    <ul className="d-flex align-items-center">
                      <li>
                        <Link to="/" className="d-flex align-items-center">
                          <span className="mr-2">English</span>
                          <FontAwesome
                            name="angle-down"
                            className="ms-2"
                          />{" "}
                          {/* Add spacing */}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/">French</Link>
                          </li>
                          <li>
                            <Link to="/">Spanish</Link>
                          </li>
                          <li>
                            <Link to="/">Italian</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="temp d-none d-lg-block ms-4">
                    <div className="temp_wap d-flex align-items-center">
                      <div className="temp_icon me-2">
                        <img src={tempIcon} alt="temp icon" />
                      </div>
                      <div>
                        <h3 className="temp_count mb-0">
                          {weather !== null ? `${weather}°C` : "..."}
                        </h3>
                        <p className="mb-0">{location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchShow ? (
        <SearchModal setSearchShow={setSearchShow} searchShow={searchShow} />
      ) : null}
    </>
  );
};

export default MainMenu;

MainMenu.propTypes = {
  className: ProtoTypes.string,
  dark: ProtoTypes.bool,
};
