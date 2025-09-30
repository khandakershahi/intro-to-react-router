import React, { use } from 'react';

const Users2 = ({ usersPromise }) => {

    const users = use(usersPromise);
    console.log('users2 suspense data load', users);

    return (
        <div>
            <h2>This is user2</h2>
        </div>
    );
};

export default Users2;