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

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}