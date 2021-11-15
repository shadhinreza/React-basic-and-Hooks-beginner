import React from 'react'

function Text({addEmoji}) {
    const text = 'Iam javascript Lover'
    return (
        <div>
           {addEmoji ? addEmoji(text, '💜') : text} 
        </div>
    )
}
export default Text;