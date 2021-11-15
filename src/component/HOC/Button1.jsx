function Button1(props) {
        const {count,CounterClick} = props;
        return <button type='button' onClick={CounterClick}>Click {count} Times</button>
}

export default Button1;
