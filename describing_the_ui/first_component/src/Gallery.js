import Profile from "./Profile"
export default function Gallery() {
    return (
      <>
      <h1>Amazing Scientists</h1>
        <Profile />
        <Profile />
        <Profile />
        <Goodjob />
      </>
    )
  }
  function Goodjob() {
    return <h1>Good job!</h1>
  }
  
