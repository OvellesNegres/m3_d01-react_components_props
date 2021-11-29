export default function GreetingsList(props) {
    console.log("Props form GreetingsLIst:", props)
  return (
    <>
      <h1>{props.title}</h1>
      <section className="flexbox-parent">{props.children}</section>
      {props.children[0]}
      {props.children[1]}
    </>
  );
}

console.log("Outside of GreetingsList")