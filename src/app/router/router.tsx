import ContainerComponent from "app/components/layout/body/container/container-component";
import UserInfoComponent from "app/pages/user-info/user-info-component";
import React from "react";
import { Routes, Route } from 'react-router-dom';

const Routers = () => {
  const renderRoute = () => {
    return (
      <>
        <Route path="/" element={<UserInfoComponent/>} />
        <Route path={"/user-info"} element={<UserInfoComponent/>} />
      </>
    );
  };

  const renderLayout = () => {
    return (
      <>
        <ContainerComponent>
          <Routes>{renderRoute()}</Routes>
        </ContainerComponent>
      </>
    );
  };

  return <div>{renderLayout()}</div>;
};

export default Routers;
