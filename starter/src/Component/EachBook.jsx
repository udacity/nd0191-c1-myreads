import React from "react";
import DropDown from "./DropDown";

export default function EachBook({ book, value, addBook }) {
  const handleSelectChange = (e) => {
    //get localStorage arr
    const currentlyReading = JSON.parse(
      localStorage.getItem("currentlyReading")
    );
    const wantToRead = JSON.parse(localStorage.getItem("wantToRead"));
    const read = JSON.parse(localStorage.getItem("read"));

    const CurrentlyUpdating = JSON.parse(localStorage.getItem(e.target.value));

    //To prevent Duplication
    let finalArray = CurrentlyUpdating.filter((value) => value.id !== book.id);

    //Checking if the element is in another Self
    addingToAnotherSelf(e,currentlyReading, wantToRead, read);
    console.log('Did the check and it has to be done')

    //adding the book to the array
    finalArray.push(book);
    localStorage.setItem(e.target.value, JSON.stringify(finalArray));
    //To setSate in HomeScreen
    addBook && addBook(e.target.value, finalArray);
  };

  const addingToAnotherSelf = (e, currentlyReading, wantToRead, read) => {
    let SwitchFromWantToRead;
    let SwitchFromread;
    let SwitchFromCurrentlyReading;
    console.log(e.target.value)
    switch (e.target.value) {
      case "currentlyReading":

        // if the shelf is in wantToRead 
        SwitchFromWantToRead = wantToRead.findIndex((e) => e.id === book.id);
        if (SwitchFromWantToRead > -1) {
          wantToRead.splice(SwitchFromWantToRead, 1);
          localStorage.setItem("wantToRead", JSON.stringify(wantToRead));
          addBook && addBook("wantToRead", wantToRead);
        }

        // if the shelf is in wantToRead 
        SwitchFromread = read.findIndex((e) => e.id === book.id);
        if (SwitchFromread > -1) {
          read.splice(SwitchFromread, 1);
          localStorage.setItem("read", JSON.stringify(read));
          addBook && addBook("read", read);
        }
        break;
      case "wantToRead":

        // if the shelf is in currentlyReading 
        SwitchFromCurrentlyReading = currentlyReading.findIndex(
          (e) => e.id === book.id
        );
        if (SwitchFromCurrentlyReading > -1) {
          //delete the book from old self
          currentlyReading.splice(SwitchFromCurrentlyReading, 1);
          //update Local Storage and Screen
          localStorage.setItem("currentlyReading", JSON.stringify(wantToRead));
          addBook && addBook("currentlyReading", currentlyReading);
        }

        SwitchFromread = read.findIndex((e) => e.id === book.id);
        if (SwitchFromread > -1) {
          //delete the book from old self
          read.splice(SwitchFromread, 1);
          //update Local Storage and Screen
          localStorage.setItem("read", JSON.stringify(read));
          addBook && addBook("read", read);
        }
        break;
      case "read":
        // if the shelf is in currentlyReading 
        SwitchFromCurrentlyReading = currentlyReading.findIndex(
          (e) => e.id === book.id
        );

        if (SwitchFromCurrentlyReading > -1) {
          //delete the book from old self
          currentlyReading.splice(SwitchFromCurrentlyReading, 1);
          //update Local Storage and Screen
          localStorage.setItem("currentlyReading", JSON.stringify(wantToRead));
          addBook && addBook("currentlyReading", currentlyReading);
        }
        // if the shelf is in WantToRead 
        SwitchFromWantToRead = wantToRead.findIndex((e) => e.id === book.id);
        if (SwitchFromWantToRead > -1) {
          wantToRead.splice(SwitchFromWantToRead, 1);
          localStorage.setItem("wantToRead", JSON.stringify(wantToRead));
          addBook && addBook("wantToRead", wantToRead);
        }
        break;
      default:
        break;
    }
  };

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}></div>
          <DropDown value={value} handleSelectChange={handleSelectChange} />
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors.map((val, i) => {
          return (
            <div key={i} className='book-authors'>
              {val}
            </div>
          );
        })}
      </div>
    </li>
  );
}
