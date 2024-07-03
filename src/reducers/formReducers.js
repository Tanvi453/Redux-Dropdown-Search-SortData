const initialstate = JSON.parse(localStorage.getItem('dropdata')) || []


const formReducer = (state = initialstate, action) => {

    switch (action.type) {

        case "ADD": {
            localStorage.setItem("dropdata", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        }


        case "DELETE": {
            localStorage.setItem("dropdata", JSON.stringify(state?.filter((item, index) => index !== action.payload)))
            return state?.filter((item, index) => index !== action.payload)
        }


        case "UPDATE": {
            const update = state?.map((item, index) => {
                if (index === action.payload.editIndex) {
                    return action.payload.editRecord
                }
                return item
            })
            localStorage.setItem("dropdata", JSON.stringify(update));
            return update;
        }

        case "SORT": {
            const update = state?.sort((a, b) => {
                if (action.payload.editRecord === "age") {
                    return (a[action.payload.editRecord] - b[action.payload.editRecord])
                } else {
                    return (a[action.payload.editRecord] > b[action.payload.editRecord] ? 1 : -1)
                }
            });

            return [...update];
        }

        case "SEARCH": {

            console.log(action.payload);
            const update1 = state?.filter((item) => {
                return item[action.payload.editIndex].toLocaleLowerCase().includes(action.payload.search.toLocaleLowerCase())
            })
            return update1;

        }

        default: {
            return state || []
        }

    }
}
export { formReducer }