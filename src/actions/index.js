export const addData = (data) => {
    return { type: "ADD", payload: data }
}

export const deleteData = (idx) => {
    return { type: "DELETE", payload: idx }
}

export const update = (item, index) => {
    return { type: "UPDATE", payload: { editRecord: item, editIndex: index } }
}

export const sortData = (key) => {
    return { type: "SORT", payload: { editRecord: key } }
}

export const searchData = (item,key) => {
    return { type: "SEARCH", payload: { search: item, editIndex: key } }
}