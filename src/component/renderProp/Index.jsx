import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import Hovered from './Hovered';
import MidleWareRender from './MidleWareRender';

class Index extends Component {
    render() {
        return (
          <div className='container mt-3'>
            <MidleWareRender 
              render={(count, increment) =>(
              <ClickCounter count={count} increment={increment}/>
              )}/>
            <MidleWareRender 
                render={(count, increment) =>(
                <Hovered count={count} increment={increment}/>
            )}/>
          </div>
        );
    }
}

export default Index;
