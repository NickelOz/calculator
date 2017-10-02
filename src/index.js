import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component {
    render() {
        return (
            <div id="calculator">
                {this.renderButton()}
            </div>
        )
    }

    renderButton() {
        return <Button value={2} />
    }
}

class Button extends React.Component {
    render() {
        return (
            <div className="button" onClick={() => alert('clicked')}>
                {this.props.value}
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)

