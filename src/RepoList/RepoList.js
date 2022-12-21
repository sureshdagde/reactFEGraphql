import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import './RepoList.css'
import RepoContainer from '../Repo Details/RepoContainer'

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
        if (error) return <p>{error.message}</p>

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