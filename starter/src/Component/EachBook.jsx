import React from "react";
import DropDown from "./DropDown"

export default function EachBook({book,value}) {
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            }}></div>
          <DropDown value={value}/>
        </div>
        <div className='book-title'>To Kill a Mockingbird</div>
        <div className='book-authors'>Harper Lee</div>
      </div>
    </li>
  );
}
