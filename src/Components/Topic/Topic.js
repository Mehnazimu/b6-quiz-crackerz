import React from 'react';

const Topic = ({topic}) => {
 const {name, logo, total} = topic;
    return (
        <div>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            
            
        </div>
    );
};

export default Topic;