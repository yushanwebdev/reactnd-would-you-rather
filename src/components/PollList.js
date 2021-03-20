import Poll from "./Poll";

const PollList = (props) => {
    const { list } = props;
    return (
        <div className="poll-list">
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

export default PollList;