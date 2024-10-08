// src/Components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();
  const backgroundRef = useRef(null);
  const containerRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [location]);

  useEffect(() => {
    if (backgroundRef.current && containerRef.current) {
      const index = hoverIndex !== null ? hoverIndex : activeIndex;
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = containerWidth / menuItems.length;
      const backgroundWidth = 90;
      const offset = (itemWidth - backgroundWidth) / 2;
      backgroundRef.current.style.left = `${index * itemWidth + offset}px`;
      backgroundRef.current.style.width = `${backgroundWidth}px`;
    }
  }, [hoverIndex, activeIndex]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const parisTime = new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Paris'
      }).format(now);
      setCurrentTime(parisTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Topbar">
      <nav className="Nav_outer__uK61I">
        <div className="Nav_inner__sSD40">
          <section className="Nav_itemsContainer___lh0S" ref={containerRef}>
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="Item_item__h59_f"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Link to={item.path}>
                  <item>
                    <p>{item.name}</p>
                  </item>
                </Link>
              </div>
            ))}
            <div 
              ref={backgroundRef}
              className="Nav_background__uyJNl" 
            />
          </section>
          <div className="Nav_settingsButton__67WTL">
            <divider></divider>
            <button>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g id="Settings">
                  <g>
                    <path d="M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"></path>
                    <path d="M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="Clock_container">
        <svg className="Clock_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
        </svg>
        <span className="Clock_time">{currentTime}</span>
        <span>(UTC+2)</span>
      </div>
    </div>
  );
};

export default Navbar;