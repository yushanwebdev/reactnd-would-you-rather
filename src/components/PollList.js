import Poll from "./Poll";

export default (props) => {
    const { list } = props;
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item}>
                        <Poll id={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}