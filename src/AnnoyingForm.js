import React, {Component} from 'react'

class AnnoyingForm extends Component {
    handleKeyUp(e) {
        if (e.keyCode === 56) {
            alert('I LOVE STAR CHAR')
        } else {
            alert('Boo')
        }
    }
    render() {
        return (
            <div>
                <h3>Type Here</h3>
                <textarea onKeyUp={this.handleKeyUp}></textarea>
            </div>
        )
    }
}
export default AnnoyingForm
