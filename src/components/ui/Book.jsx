
import React from "react";
import Rating from "./Rating";
import Price from "./Price";
// import { books } from '../data'

const Book = ({ book }) => {
    return (
        <div className="book">
            <a href={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={book.url} alt="" />
                </figure>
            </a>
            <div className="book__title">
                <a href={`/books/${book.id}`} className="book__title--link">
                {book.title}
                </a>
            </div>
            <Rating rating={book.rating} />
             <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </div>
    )
}

export default Book