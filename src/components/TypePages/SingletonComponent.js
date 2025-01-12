import React from 'react'

const SingletonComponent = ({ singleton }) => {
  switch (singleton.data.singleton) {
    default:
      return <div>Unknown singleton type: {singleton.data.singleton}</div>;
  }
}

export default SingletonComponent