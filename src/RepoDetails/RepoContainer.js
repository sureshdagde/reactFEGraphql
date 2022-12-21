import React from 'react'
import { useNavigate } from 'react-router-dom';
import './RepoDetails.css'

const RepoContainer = ({ repo }) => {
  
  const navigate = useNavigate();

  const handleClick = (repo_name) => navigate(`/repo/${repo_name}`);

  return (
    <div className="repo-card">
      <div className="card-body" onClick={() => handleClick(repo.name)}>
        <h5 className="card-title">Repository Name: {repo.name}</h5>
        <h5 className="card-title">Repository Size: {repo.size}</h5>
        <h5 className="card-title">Owner Username: {repo.owner.login}</h5>
      </div>
    </div>
  )
}

export default RepoContainer
