import React from "react";

function BookRow(props) {
  const book = props.book;
  const author = props.author;
  console.log("BookRow.js Book:", book);
  const authors = book.authors.map(author => <div>{author.name}</div>);
  return (
    <tr>
      <td>{book.title}</td>
      <td>
        {author.first_name} {author.last_name}
      </td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
