import React, { Component } from 'react';
{{#needExample}}
import { connect } from 'react-redux';

// Components
import BookList from '_components/BookList';

// action creators
import booksActions from '_actions/books';

import { fetchHotBooks } from '_apis/books';

function mapStateToProps({ books }) {
    return {
        books,
    };
}

@connect(mapStateToProps)
export default class Home extends Component {
    componentDidMount() {
        this.props.dispatch(fetchHotBooks());
    }

    selectBook = (book) => {
        this.props.dispatch(booksActions.selectOne(book.id));
    }

    render() {
        const { books } = this.props;
        return (
            <div>
                <BookList
                    books={ books }
                    selectOne={ this.selectBook }
                />
            </div>
        );
    }
}
{{else}}

export default class Home extends Component {
    render() {
        return (
            <div>
                Hello React!
            </div>
        );
    }
}
{{/needExample}}
