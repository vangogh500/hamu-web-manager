import React from 'react'
import {Card, CardBlock, CardTitle} from 'reactstrap'
import LoginForm from './components/LoginForm.js'
import {FormattedMessage} from 'react-intl'

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-vhfill">
        <Card className="z-depth-5">
          <CardBlock>
            <CardTitle className="text-center"><FormattedMessage id="login.title" /></CardTitle>
            <hr />
            <LoginForm />
          </CardBlock>
        </Card>
      </div>
    )
  }
}
