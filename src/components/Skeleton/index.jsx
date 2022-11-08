import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={354}
    height={140}
    viewBox="0 0 354 140"
    backgroundColor="#f3f3f3"
    foregroundColor="#ebebeb"
    {...props}>
    <rect x="0" y="NaN" rx="0" ry="0" width="196" height="NaN" />
    <rect x="2" y="172" rx="0" ry="0" width="150" height="29" />
    <rect x="2" y="220" rx="0" ry="0" width="218" height="17" />
    <rect x="9" y="280" rx="0" ry="0" width="151" height="23" />
    <rect x="0" y="10" rx="0" ry="0" width="318" height="84" />
    <rect x="0" y="104" rx="0" ry="0" width="318" height="32" />
  </ContentLoader>
);

export default Skeleton;
