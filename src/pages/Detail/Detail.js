import React from 'react'

export default function Detail(props) {
    console.log(props);
    //http://localhost:3000/detail/456321467
  return (
    <div>
        Tham số id: {props.match.params.id}
    </div>
  )
}
