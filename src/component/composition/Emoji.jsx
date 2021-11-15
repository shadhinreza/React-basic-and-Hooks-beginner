import { Component } from 'react';

class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji} `
    render() {
        return this.props.children(this.addEmoji)
    }
}

export default Emoji;
