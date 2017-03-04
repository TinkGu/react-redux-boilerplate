import axios from 'axios';
import { API_PREFIX } from '_constants';
import booksActions from '_actions/books';

export function fetchHotBooks() {
    return function (dispatch) {
        return axios.get(`${API_PREFIX}/books/`).then(
            res => {
                const books = res.data;
                dispatch(booksActions.load(books));
            },
            error => console.error(error)
        )
    }
}
