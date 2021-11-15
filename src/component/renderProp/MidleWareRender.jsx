import { Component } from 'react';

class MidleWareRender extends Component {
    state = {count : 0}
    increment = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    render() {
        const {count} = this.state;
        const {render} = this.props;
        return render(count, this.increment)
    }
}

export default MidleWareRender;
