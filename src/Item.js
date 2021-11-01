import React from 'react'

const Item = (props) => {
    const {title, author, summary} = props
    return (
        <div>
            <p>{title}</p>
            <p>{author}</p>
            <p>{summary}</p>
            <hr/>
        </div>
    )
}

export default Item
