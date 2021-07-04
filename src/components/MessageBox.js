import React from 'react';

function MessageBox(props) {
    return (
        <div class="alert alert-warning" role="alert">
            {props.children}
        </div>
    )
}

export default MessageBox;
