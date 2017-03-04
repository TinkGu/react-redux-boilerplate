import React from 'react';

export default function BookList(props) {
    const { books, selectOne } = props;

    return (
        <ul>
        {
            books.map(book => (
                <li key={ book.id }>
                    <span onClick={ () => selectOne(book) }>
                        { book.isSelected ? 'selected!' : 'click me!' }
                    </span>
                    &emsp;
                    <span>{ book.name }</span>
                </li>
            ))
        }
        </ul>
    );
}
