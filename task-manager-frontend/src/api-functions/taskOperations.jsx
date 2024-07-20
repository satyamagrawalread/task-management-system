
export async function createTask(details) {

    return await fetch('http://localhost:8080/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
    return await fetch('http://localhost:8080/api/tasks', {
        method: 'GET'
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
    return await fetch(`http://localhost:8080/api/tasks/${task_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
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
    return await fetch(`http://localhost:8080/api/tasks/${task_id}`, {
        method: 'DELETE',
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