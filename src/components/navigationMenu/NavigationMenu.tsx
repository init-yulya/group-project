import React, { useState } from 'react';
import {
  Tabs, Tab, Toolbar,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.scss';

function NavigationMenu() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (value: React.SetStateAction<string>) => {
    setActiveTab(value);
  };

  return (
    <Toolbar>
      <Tabs value={activeTab}>
        <Tab
          style={{ marginRight: '20px', color: activeTab !== '/vacancy' ? '#797981' : '#1A1B22' }}
          label="Создать вакансию"
          value="/vacancy"
          component={Link}
          to="/vacancy"
          onClick={() => handleTabClick('/vacancy')}
        />
        <Tab
          style={{ marginRight: '20px', color: activeTab !== '/vacancy/active' ? '#797981' : '#1A1B22' }}
          label="Активные"
          value="/vacancy/active"
          component={Link}
          to="/vacancy/active"
          onClick={() => handleTabClick('/vacancy/active')}
        />
        <Tab
          style={{ color: activeTab !== '/vacancy/archive' ? '#797981' : '#1A1B22' }}
          label="Архив"
          value="/vacancy/archive"
          component={Link}
          to="/vacancy/archive"
          onClick={() => handleTabClick('/vacancy/archive')}
        />
      </Tabs>
    </Toolbar>
  );
}

export default NavigationMenu;
