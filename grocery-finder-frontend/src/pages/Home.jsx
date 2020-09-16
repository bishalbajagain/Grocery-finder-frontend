import React from "react";
import { withRouter } from 'react-router';

class Home extends React.Component {
  handleToAboutPage = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <div onClick={this.handleToAboutPage}>
          mainページへ遷移する
        </div>
      </div>
    )
  }
}

export default withRouter(Home)