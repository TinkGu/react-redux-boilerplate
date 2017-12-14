import React, { PureComponent } from 'react'
{{#redux}}
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions } from 'redurex'

@connect(x => ({
    username: x.user.name,
}))
{{else}}

{{/redux}}
export default class App extends PureComponent {
    {{#redux}}
    handleClick = () => {
        this.props.dispatch(actions().user.login({
            name: 'TinkGu'
        }))
    }

    {{/redux}}
    render() {
        return (
            <div>
                {{#redux}}
                <Link to="/counter">Counter 页面</Link>
                <button onClick={this.login}>
                    欢迎
                </button>
                <p>{this.props.username}</p>
                {{else}}
                Hello World
                {{/redux}}
            </div>
        )
    }
}
