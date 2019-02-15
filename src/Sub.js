import React from 'react'



const Sublist = (props) =>
props.Listsub.map((n, i) =>
  <a key={i} href="#" className="sublink">{n.name}</a>
)

export default Sublist