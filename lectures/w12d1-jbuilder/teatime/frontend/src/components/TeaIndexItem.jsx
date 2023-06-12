import { useState } from "react"
import TeaDetail from "./TeaDetail"

const TeaIndexItem = ({tea}) => {
  const [show, toggleShow] = useState(false)

  const detail = show ? (
    <TeaDetail teaId={tea.id}/>
  ) : (null)
  
  return (
    <div onClick={() => toggleShow(!show)}>
      <div key={tea.id}>
        <ul>
          <li>
            <h4>Flavor: {tea.flavor}</h4>
          </li>
          <li>
            <p>Price: {tea.price}</p>
          </li>
          {detail}
        </ul>
      </div>
    </div>
  )
}

export default TeaIndexItem;