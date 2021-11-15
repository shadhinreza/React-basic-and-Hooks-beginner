const ClickCounter = (props) => {
    const {count, increment} = props;
    return <button type='button' onClick={increment}>Click {count} Times</button>
}

export default ClickCounter;
