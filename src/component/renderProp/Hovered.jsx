
const Hovered = (props) => {
    const {count,increment} = props;
    return <h2 onMouseOver={increment}>Hovered {count} Times</h2>
}

export default Hovered;
