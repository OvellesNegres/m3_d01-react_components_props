import GitHubButton from "./GitHubButton"
function Greeting(props) {
    const {name, username} = props
  return (
    <div>
      <u>Hello {props.name}!</u>
      <GitHubButton name username/>
    </div>
  );
}

export default Greeting