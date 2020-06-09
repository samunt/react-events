import React, {Component} from 'react'

class CopyDemo extends Component {
    handleCopy() {
        alert('DONT COPY')
    }
    render() {
        return (
            <div>
                <h3>Copy some of this text</h3>
                <p onCopy={this.handleCopy}>Lorem ipsum dolor sit emet. In the beginning.</p>
            </div>
        )
    }
}
export default CopyDemo
