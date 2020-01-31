export const listInputs = [
    {
        title: 'First Name',
        type: 'text',
        name: 'firstName'
    },
    {
        title: 'Last Name',
        type: 'text',
        name: 'lastName'
    },
    {
        title: 'Phone',
        type: 'tel',
        name: 'phone'
    },
    {
        title: 'Gender',
        type: 'select',
        name: 'gender',
        option: [
            {
                value: '', title: 'Select'
            },
            {
                value: 'Men', title: 'Men'
            },
            {
                value: 'Women', title: 'Women'
            }
        ]
    },
    {
        title: 'Age',
        type: 'number',
        name: 'age'
    },
];