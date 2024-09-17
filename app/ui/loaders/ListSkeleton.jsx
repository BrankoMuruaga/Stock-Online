import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={2000}
    height={600}
    viewBox="0 -50 500 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="35" cy="730" r="33" />
    <rect x="91" y="708" rx="5" ry="5" width="865" height="40" />
    <rect x="6" y="19" rx="0" ry="0" width="569" height="24" />
    <rect x="7" y="65" rx="0" ry="0" width="569" height="24" />
    <rect x="8" y="110" rx="0" ry="0" width="569" height="24" />
    <rect x="8" y="156" rx="0" ry="0" width="569" height="24" />
    <rect x="8" y="199" rx="0" ry="0" width="569" height="24" />
    <rect x="15" y="6" rx="0" ry="0" width="62" height="10" />
    <rect x="170" y="6" rx="0" ry="0" width="62" height="10" />
    <rect x="309" y="6" rx="0" ry="0" width="62" height="10" />
    <rect x="439" y="5" rx="0" ry="0" width="62" height="10" />
  </ContentLoader>
);

export default MyLoader;
