export function RepositoryItem(props) {

  console.log(props.repository?.name)

  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'Default'}</p>

      <a href={props.repository?.link ?? '#'}>
        {props.repository?.link ?? 'Default'}
      </a>
    </li>
  )
}