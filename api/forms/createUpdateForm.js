

// POST /forms/new to create new form
// PUT /forms/:id to update existing form
const request = {
  name: 'My Brand New Form',
  fields: [
    // fields can contain following field types
    {
      type: 'text',
      name: 'username', // unique over form
      label: 'enter username here',
      placeholder: 'John Doe'
    },
    { 
      type: 'number',
      name: 'year', // unique over form
      label: 'enter year of birth ',
      placeholder: '2006',
    },
    {
      type: 'dropdown',
      name: 'gender', // unique over form
      label: 'Gender',
      items: [
        {
          name: "Male",
          value: "m"
        },
        {
          name: "Female",
          value: "w"
        }
      ],
      default: 0, // item index -> Male
    },
    {
      type: 'checkmark',
      name: 'news', // unique over form
      label: 'get news on email',
    }
  ]
}

const response = {
  id: 12313 // for POST requests
};
