import React from 'react';

const WithHoc = (OriginalComponent) => {
    return class NewComponent extends React.Component {
        state ={count : 0, count2: 0}
        CounterClick = () =>{
          this.setState(prevState => ({
             count: prevState.count + 1 
          }))
      }
      MouseOver = () =>{
        this.setState(prevState => ({
           count2: prevState.count2 + 1 
        }))
      }
        render(){
            const {count,count2} = this.state;
            return(
                <div>
                    <OriginalComponent count={count} count2={count2} CounterClick={this.CounterClick} MouseOver={this.MouseOver}/>
                </div>
            )
        }
    }
}

export default WithHoc;
