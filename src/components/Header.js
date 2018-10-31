import React from 'react';
import Menu from './Menu';

export default function Header({title, subTitle, menuItems}) {
  return(
    <div>
      <div className="bg-black text-white flex justify-between items-center py-8">
        <div>
          &nbsp;
        </div>
        <div className="text-center">
          <div className="text-2xl uppercase">{title}</div>
          <div className="tracking-wide text-sm font-light text-grey-dark uppercase pt-2">{subTitle}</div>
        </div>
        <div>
          &nbsp;
        </div>
      </div>
      <Menu menuItems={[...menuItems]} />
    </div>
  )
}
