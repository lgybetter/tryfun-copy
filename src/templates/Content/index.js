import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config'

class Content extends Component {
  render () {
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default Content