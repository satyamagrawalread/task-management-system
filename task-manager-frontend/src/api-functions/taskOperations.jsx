const backend_url = import.meta.env.VITE_APP_BACKEND_URL;
export async function createTask(details) {

    return await fetch(`${backend_url}api/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    }).then((res) => {
        if(!res.ok) {
            throw new Error('Internal Server Error');
        }
        return res.json();
    }).catch((error) => {
        console.error(error);
        throw new Error('Something went wrong');
    })

   
}

export async function retrieveTask() {
    return await fetch(`${backend_url}api/tasks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res) => {
        if(!res.ok) {
            throw new Error('Internal Server Error');
        }
        return res.json();
    }).then((data) => {
        return data;
    }).catch((error) => {
        console.error(error);
        throw new Error('Something went wrong');
    })
}

export async function updateTask(task_id, details) {
    return await fetch(`${backend_url}api/tasks/${task_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    }).then((res) => {
        if(!res.ok) {
            throw new Error('Internal Server Error');
        }
        return res.json();
    }).catch((error) => {
        console.error(error);
        throw new Error('Something went wrong');
    })
}

export async function deleteTask(task_id) {
    return await fetch(`${backend_url}api/tasks/${task_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res) => {
        if(!res.ok) {
            throw new Error('Internal Server Error');
        }
        return res.json();
    }).catch((error) => {
        console.error(error);
        throw new Error('Something went wrong');
    })

   
}