import React from 'react'

const Child1 = (props) => {
  console.log(props)
  const {input}= props;
  return (
    <div>
      {input}
    </div>
  )
}

export default Child1