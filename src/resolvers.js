// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

import books from './data/books.js';

export const resolvers = {
  Query: {
    books: () => books,
    book: (_, { title }) => books.find((book) => title === book.title)
  },
};
