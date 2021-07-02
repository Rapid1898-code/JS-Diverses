// import React from "react"

// class Info extends React.Component {
//   render() {
//     const title = "This is my title."
//     const showTitle = true
  
//     return (    
//       <div>
//         <h1>{showTitle ? title : ""}</h1>
//         <p>Manage your stuff</p>
//       </div>
//     )
//   }    
// }

function Info() {       // define the component
  const title = "This is my title."
  const showTitle = true

  return (    
    <div>
      <h1>{showTitle ? title : ""}</h1>
      <p>Manage your stuff</p>
    </div>
  )
}

export default Info;

