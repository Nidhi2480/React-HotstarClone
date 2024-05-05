import React from 'react';
import './footer.css'; // Import CSS file for FooterItem styling

function FooterItem({ gridColumn, gridRow, children,classname }) {
  const style = {
    gridColumn,
    gridRow,
  };

  return <div className={classname} style={style}>{children}</div>;
}

export default FooterItem;