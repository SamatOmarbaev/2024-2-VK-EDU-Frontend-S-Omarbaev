export const initialPeople = [
    {
        id: '1',
        name: 'Leanne Graham',
        photo: 'https://picsum.photos/50/50?random=23213',
    },
    {
        id: '2',
        name: 'Ervin Howell',
        photo: 'https://picsum.photos/50/50?random=23534534',
    },
    {
        id: '3',
        name: 'Clementine Bauch',
        photo: 'https://picsum.photos/50/50?random=475674',
    },
    {
        id: '4',
        name: 'Patricia Lebsack',
        photo: 'https://picsum.photos/50/50?random=64755',
    },
    {
        id: '5',
        name: 'Chelsey Dietrich',
        photo: 'https://picsum.photos/50/50?random=235783',
    },
    {
        id: '6',
        name: 'Mrs. Dennis Schulist',
        photo: 'https://picsum.photos/50/50?random=324235',
    },
    {
        id: '7',
        name: 'Kurtis Weissnat',
        photo: 'https://picsum.photos/50/50?random=136436',
    },
    {
        id: '8',
        name: 'Nicholas Runolfsdottir V',
        photo: 'https://picsum.photos/50/50?random=143156',
    },
];

export const USERS = [
    { id: '1', name: 'User 1', username: "u1", avatar: '', description: "some details" },
    { id: '2', name: 'User 2', username: "u2", avatar: '', description: "no suprises" },
    { id: '3', name: 'User 3', avatar: '' }
]

export const getByID = (id) => {
    return USERS.find(user => user.id === id)
};

export const getAll = () => {
    return USERS
}