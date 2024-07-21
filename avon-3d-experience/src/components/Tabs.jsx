import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TabsComponent = ({ toggleShoWHeart, toggleShowVanilla,toggleShowChoco,toggleShowStrawberry,toggleShowTopping1 }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Direct path to the image in the public/icons folder
  const BaseIcon = '/icons/BaseHeart.png';
  const CocoHeartIcon = '/icons/ChocoHeart.png';
  const StrawberryIcon = '/icons/StrawberryHeart.png';
  const Topping1Icon = '/icons/Topping1Heart.png';



  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
            href="#"
          >
            Shapes
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
            href="#"
          >
            Flavors
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
            href="#"
          >
            Topping
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}>
          <h4>Shapes</h4>
          <div className="icon-column">
            <img src={BaseIcon} alt="Icon" onClick={toggleShoWHeart} />
          </div>
        </div>
        <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`}>
          <h4>Flavors</h4>
          <div className="icon-column">
            <img src={CocoHeartIcon} alt="Icon" onClick={toggleShowChoco} />
            <img src={StrawberryIcon} alt="Icon" onClick={toggleShowStrawberry}/>
          </div>
        </div>
        <div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`}>
          <h4>Topping</h4>
          <div className="icon-column">
            <img src={Topping1Icon} alt="Icon" onClick={toggleShowTopping1}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
