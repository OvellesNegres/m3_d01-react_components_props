export default function GitHubButotn(props){
   return (
   <a href={`https://github.com/${props.username}`}><button>Lik to {props.name} GitHub profile</button></a>
   )
}