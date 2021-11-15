import React from 'react';

const Mailbox = (props) => {
    const unreadMessages = props.unreadMessages
    const count = 1
    return (
        <div>
           <h2>Your unread messages!</h2>
           {unreadMessages.length > 0 && <h3 className='text-danger'>You have {unreadMessages.length} notifications</h3>} 
           {count > 0 && <h2>Hello</h2>}
        </div>
    );
}

export default Mailbox;
