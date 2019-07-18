import React from 'react'

function Description({photoDescription, copyright}) {

    return <div className="photo-description">
        <p>(C) {copyright}</p>
        <p>{photoDescription}</p>
        </div>
}

export default Description