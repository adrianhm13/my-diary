export default function EntriesList({entries}) {

    return (
        <div>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <p>{entry.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
