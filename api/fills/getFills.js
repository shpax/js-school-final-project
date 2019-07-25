// GET /fills/13123?offset=10&count=10
// 13123 is form id
// offset, count are optional
const response = {
  fills: [
    {
      id: 89189,
      fields: {
        username: 'John',
        year: 1994,
        gender: 'm',
        news: true,
      }
    },
    {
      id: 72384724,
      fields: {
        username: 'Jane',
        year: 1995,
        gender: 'w',
        news: false,
      }
    },
  ]
};