import React from 'react'

const SingleDate = ({allData}) => {
    const {name, username, id} = allData;
  return (
    <div>
    <h2>{name}</h2>
    <h2>{username}</h2>
    </div>
  )
}

export default SingleDate