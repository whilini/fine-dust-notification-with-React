import { Space, Switch } from 'antd-mobile';
import React from 'react';
import { useDispatch } from 'react-redux';
import { darkTheme } from '../redux/dustSlice';
import '../scss/Header.scss';

function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__title">알리Me세먼지</div>
      <Space className="header__check-box" align="center">
        <div>Dark Mode</div>
        <Switch
          className="switch"
          onChange={(v) => {
            dispatch(darkTheme(v));
          }}
        />
      </Space>
    </div>
  );
}

export default React.memo(Header);
