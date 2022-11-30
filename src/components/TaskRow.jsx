export const TaskRow = ({ task , toggleTask}) => {
    return (
        <tr>
            <td>
                {task.name}
                <input
                    type="checkbox"
                    onChange={() => toggleTask(task)}
                    checked={task.done}
                />
            </td>
        </tr>
    )
}