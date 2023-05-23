import React from 'react';

const LinkList = ({links}) => {
    return (
        <ul>
            {
                links.map((link, index) => {
                    return <li key={index}><a href="#">{link}</a></li>
                })
            }
        </ul>
    );
};

export default LinkList;