import React from 'react'

export default function NavBar(props) {

  const onClickAnalytics = () => {
    props.setAnalyticsState(true);
    props.setGraphsState(false);
  }
  const onClickGraphs = () => {
    props.setGraphsState(true);
    props.setAnalyticsState(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">Heart Failure Analytics</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <p className="nav-link" onClick={onClickAnalytics}>Analytics </p>
            </li>
            <li className="nav-item active">
              <p className="nav-link" onClick={onClickGraphs}>Graphs </p>
            </li>
            <li className="nav-item">
              <a className="nav-link link-success" href="https://github.com/TanmayDaga/Ai">Get Code </a>
            </li>


          </ul>

        </div>
      </nav>
    </>

  )
}
