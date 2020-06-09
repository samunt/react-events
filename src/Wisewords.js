import React, {Component} from 'react'

class Wisewords extends Component {
    dispenseWisdom() {
        let messages = [
            'A journey of a thousand miles begins with a single step',
            'Let he who has not sinned cast the first stone',
            'To thine own self be true',
            'Know your enemy like you know yourself and in a thousand battles you will be victorious',
            'Dont waste today thinking about yesterday or tomorrow'
        ];
        let randomIdx = Math.floor(Math.random() * messages.length);
        console.log(messages[randomIdx]);
    }
    render() {
        return (
            <div className="wiseSquare" onMouseEnter={this.dispenseWisdom}>
                <p>MOUSE ENTER</p>
            </div>
        )
    }
}
export default Wisewords;
