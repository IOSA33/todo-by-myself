import { useState } from "react";

function Form({onAdd}) {
    const [text, setText] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!text.trim() || submitting) return;

        setSubmitting(true);

        try {
            await onAdd(text);
            setText('');
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add your Todo: 
                <input 
                    type="text" name="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                    disabled={submitting}
                    placeholder="Enter todo..."
                />
            </label>
            <button type="submit" disabled={submitting}>
                {submitting ? 'Adding...' : 'Add'} 
            </button>
        </form>
    )
}

export default Form;