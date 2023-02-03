import { useState} from "react"

function Table({row}){
  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Book</th>
          <th>Reserved?</th>
          <th>Quantity</th>
       </tr>  
      </thead>
      <tbody> 
        {
          row.map((item,index)=>(
          <tr key={index}>
            <th>{index + 1}</th>
            <th>{item.Bookname}</th>
            <th>{item.Reservation}</th>
            <th>{item.Quantity  }</th>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default function Profile() {
  const [row_,setRow] = useState([]);
  const [inputValues, setInputValues] = useState(
    {
      Bookname : '',
      Reservation : '',
      Quantity : ''
    }
  );

  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name] : event.target.value
    })
  }

  function handleSubmit(event) {
    const temprow = row_.slice();
    const tempobj = inputValues;
    temprow.push(tempobj)
    console.log(tempobj) 
    setRow(temprow)
    setInputValues({
      Bookname : '',
      Reservation : '',
      Quantity : '', 
    })
    
  }
  return (
    <>
    <h1>Book Management</h1>
    <Table row = {row_}/>
    <br></br>
    <input name="Bookname" value={inputValues.Bookname} type="text" placeholder="Book name"  onChange= {handleChange}></input>
    <br></br>
    <input name ="Reservation"type="text" value={inputValues.Reservation} placeholder="Reservation"   onChange= {handleChange}></input>
    <br></br>
    <input name = "Quantity" type="text" value={inputValues.Quantity} placeholder="Qty" onChange= {handleChange}></input>
    <br></br>
    <button onClick={handleSubmit}>Add</button>
    
    </>
  );
}