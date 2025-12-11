export default function Comment({comment}) {
  console.log(comment);

    const {name, email, body} = comment;

  return (
    <div className="card">
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
      <h3>Body : {body}</h3>
    </div>
  )
}
