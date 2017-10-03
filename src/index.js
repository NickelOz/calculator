import React from 'react'
import ReactDOM from 'react-dom'


class Button extends React.Component {
    render() {
        return (
            <div className="button" onClick={() => this.props.onClick()}>
                {this.props.value}
            </div>
        )
    }
}

class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            currentTerm: 0,
            currentOperator: null,
            previousTerm: null
        }
    }

    renderNumberButton(i) {
        return <Button value={i} onClick={() => this.addNumber(i)}/>
    }

    addNumber(i) {
        this.setState({currentTerm: i}, () => {alert(`The current term is ${this.state.currentTerm}`)})
    }

    render() {
        return (
            <div id="calculator">
                {this.renderNumberButton(1)}
                {this.renderNumberButton(2)}
                {this.renderNumberButton(3)}
            </div>
        )
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)

