import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redurex'
import './counter.less'

@connect(x => ({
    count: x.counter.count,
}))
export default class Counter extends PureComponent {
    dispatchAction = (x) => this.props.dispatch(x(actions().counter))
    render() {
        return (
            <div className="counter">
                <button onClick={() => this.dispatchAction(x => x.add())}>add</button>
                <button onClick={() => this.dispatchAction(x => x.minus())}>minus</button>
                <br />
                count: {this.props.count}
                <button onClick={() => this.dispatchAction(x => x.clearLater())}>clearLater</button>
            </div>
        )
    }
}
