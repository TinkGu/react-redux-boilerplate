import createReducer from '_createReducer';
import { booksAts } from '_actions/types';

const initialBooks = [{
    id: 1,
    name: '时间简史',
}, {
    "id": 2,
    "name": "铁皮鼓",
}, {
    "id": 3,
    "name": "繁花",
}];

export default createReducer({
    [booksAts.load]: (oldBooks, { payload=[] }) => {
        return payload.map(book => ({
            ...book,
            isSelected: false,
        }));
    },
    [booksAts.selectOne]: (oldBooks, { payload }) => {
        const { targetId } = payload;

        return oldBooks.map(book => ({
            ...book,
            isSelected: targetId === book.id,
        }));
    }
}, initialBooks);
