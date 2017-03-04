import extractActionTypes from '_extractActionTypes';
{{#needExample}}

// common ui data
import notification from './notification';

// business data
import books from './books.js';

export const notificationAts = extractActionTypes(notification);
export const booksAts = extractActionTypes(books);
{{/needExample}}
