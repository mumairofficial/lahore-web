import React from 'react';

export default function Menu ({ menuItems }) {
  return (
    <div className="w-full bg-white flex justify-around py-5 border-b-2 border-grey-light">
      <ul className="container list-reset flex items-center text-xs uppercase tracking-wide">
        <li className="mr-6">
          <a className="
            no-underline text-grey-darker
            pb-5 border-b-2 border-green text-green font-bold
            hover:border-green" href="#">Home</a>
        </li>
        {menuItems.map((item, index) => {
          return (
            <li className="mr-6" key={index}>
              <a className="no-underline text-grey-darker pb-5 border-b-2 border-transparent hover:border-green" href="#">{item}</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
