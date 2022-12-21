import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import './RepoList.css'
import RepoContainer from '../RepoDetails/RepoContainer'

const RepoList = () => {
  return (<Query
      query={gql
      `
        query Query {
          repoList {
            name
            size
            owner{
              id
              login
              avatar_url
              url
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading....</p>
        if (error) return <h2 style={{textAlign: 'center', color: 'red'}}>{error.message}</h2>

        return (
          <div className="repo-list">{
            data.repoList.map(repo => {
              return <RepoContainer repo={repo} key={repo.name}/>
            })}
          </div>
        )
      }}
    </Query>
  )
} 

export default RepoList