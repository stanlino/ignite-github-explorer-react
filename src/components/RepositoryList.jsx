import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {

  const repository = {
    name: 'gofinances',
    description: 'A finance app',
    link: 'https://github.com/stanlino/ignite-gofinances'
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}