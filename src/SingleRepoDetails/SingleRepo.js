import gql from 'graphql-tag';
import React from 'react'
import { Query } from 'react-apollo';
import { useParams } from 'react-router-dom';
import './SingleRepo.css'


const SingleRepo = () => {
  
  let { repo_name } = useParams();
  
  return (
    <Query
      query={gql
      `
        query Query {
          repoDetails(repoName: "${repo_name}"){
            name
            size
            private
            active_webhook
            yml_content
            total_files
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
          <>
            <h1 style={{marginTop:'7vh'}}>Repository Details:</h1>
            <div className="card-body-repo-details">
              <h5 className="card-title"><strong>Repository Name:</strong> {data.repoDetails.name}</h5>
              <br />
              <h5 className="card-title"><strong>Owner Login: </strong> {data.repoDetails.owner.login}</h5>
              <br />
              <h5 className="card-title"><strong>Is Repository Private: </strong> {data?.repoDetails?.private ? 'Yes' : 'No'}</h5>
              <br />
              <h5 className="card-title"><strong>Repository Size:</strong> {data.repoDetails.size}</h5>
              <br />
              <h5 className="card-title"><strong>Active Webhooks: </strong> {data.repoDetails.active_webhook   ? 'Yes' : 'No'}</h5>
              <br />
              <h5 className="card-title"><strong>Total Files in Repo: </strong> {data.repoDetails.total_files}</h5>
              <br />
              <h5 className="card-title"><strong>YML Content: </strong> {data.repoDetails.yml_content ? '' : 'null'}</h5>
              <br />
              {data.repoDetails.yml_content ? 
                <>
                  <div className='yml-content' >
                    <pre>
                      <strong>{data.repoDetails.yml_content}</strong> 
                    </pre>
                  </div>
                  <br />
                </>
                : null}
            </div>
          </>
        )
      }}
    </Query>
  )
} 

export default SingleRepo