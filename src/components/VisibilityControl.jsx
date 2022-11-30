export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete it?")) {
            cleanTasks();
        }
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setShowCompleted(e.target.checked)}
            />
            <label>Show Tasks Doned</label>

            <button onClick={handleDelete} className="btn-danger">Delete Tasks</button>
        </div>
    )
}