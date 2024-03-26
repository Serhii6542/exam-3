import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout(){
    const [openMbMenu, setOpen] = useState(false)
    return <div className="page-content">
        <div className={openMbMenu ? `page-overlay active` : `page-overlay`}></div>
        <div className={openMbMenu ? `menu-panel open-nav-mb`: `menu-panel`}>
            <div className="panel-top">
                <div className="logo-mb">
                    <Link className="logo" to="/">Movies</Link>
                </div>
                <div className="hamburger-wrap-mb">
                    <button id="hamb_btn_mb" className="hamburger hamburger--squeeze is-active" type="button" onClick={()=>setOpen(false)}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="wrap-nav-mb">
                <nav className="mobile-nav">
                    <ul>
                        <NavLink className="link" to="/">Home</NavLink>
                        <NavLink className="link" to="fav_list">Fav-list</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
        <header className="header">
            <div className="container">
                <Link className="logo" to="/">Movies</Link>
                <nav className="nav">
                    <NavLink className="link" to="/" >Home</NavLink>
                    <NavLink className="link" to="fav_list">Fav-list</NavLink>
                </nav>
                <div className="hamb">
                    <button className={openMbMenu ? `hamburger hamburger--squeeze is-active` : `hamburger hamburger--squeeze`} type="button" onClick={()=>setOpen(true)}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
        <div className="container">
            <Outlet />
        </div>
    </div>
}