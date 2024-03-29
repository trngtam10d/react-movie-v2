/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 26/09/2022 ).
 * @var string part header.
*/
import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import sass and image (Package) 
import '../UI/heading.scss';
import logo from '../UI/assets/imdb_logo.png';

const Navigation = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Heading = () => {
    const { pathname } = useLocation();
    const NavigationLink = useRef(null);
    const active = Navigation.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                NavigationLink.current.classList.add('shrink');
            } else {
                NavigationLink.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={NavigationLink} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">TMDb</Link>
                </div>
                <ul className="header__nav">
                    {
                        Navigation.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Heading;