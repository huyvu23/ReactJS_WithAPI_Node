import React, { memo } from "react";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";

function HomePage() {
  return (
    <>
      <div>
        <HomeHeader />
        <Specialty />
      </div>
    </>
  );
}

export default memo(HomePage);
