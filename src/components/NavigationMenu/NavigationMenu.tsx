import React, { useState } from 'react';
import {
  AppBar, Tabs, Tab, Toolbar,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function NavigationMenu() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <AppBar position="static" sx={{ padding: '28px 94px 0', backgroundColor: '#fff', boxShadow: 'none' }}>
      <Toolbar>
        <Tabs value={activeTab}>
          <Tab
            style={{
              padding: 0, marginRight: '20px', fontFamily: 'YS Text', fontSize: '24px', lineHeight: '32px', color: '#1A1B22',
            }}
            label="Создать вакансию"
            value="/vacancy"
            component={Link}
            to="/vacancy"
            onClick={() => handleTabClick('/vacancy')}
          />
          <Tab
            style={{
              padding: 0, marginRight: '20px', fontFamily: 'YS Text', fontSize: '24px', lineHeight: '32px', color: '#1A1B22',
            }}
            label="Активные"
            value="/vacancy/active"
            component={Link}
            to="/vacancy/active"
            onClick={() => handleTabClick('/vacancy/active')}
          />
          <Tab
            style={{
              padding: 0, fontFamily: 'YS Text', fontSize: '24px', lineHeight: '32px', color: '#1A1B22',
            }}
            label="Архив"
            value="/vacancy/archive"
            component={Link}
            to="/vacancy/archive"
            onClick={() => handleTabClick('/vacancy/archive')}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationMenu;
