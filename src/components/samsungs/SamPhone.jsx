import { useParams } from "react-router-dom"

function SamPhone() {
    const {id}=useParams()
    console.log(id);
    
  return (
    <div>SamPhone</div>
  )
}

export default SamPhone