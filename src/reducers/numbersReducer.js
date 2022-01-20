
const initialNumber = []

const numbersReducer = (state = initialNumber, action) => {
    switch (action.type) {
        case 'ADD_NUMBER': {
            return [...state, { ...action.payload }]
        }

        case 'PLUS_TWO': {
            return state.map((ele) => {
                return { ...ele, value: ele.value + 2 }
            })
        }

        case 'REMOVE_ALL': {
            return []
        }
        case 'DECREMENT_NUM': {
            return state.map((num) => {
                if (num.id === action.payload) {
                    return { ...num, value: num.value - 1 }
                } else {
                    return num
                }
            })
        }

        case 'INCREMENT_NUM': {
            return state.map((num) => {
                if (num.id === action.payload) {
                    return { ...num, value: num.value + 1 }
                } else {
                    return num
                }
            })
        }

        case 'DELETE_NUM': {
            return state.filter((num) => {
                return num.id !== action.payload
            })
        }


        default: {
            return [...state]
        }
    }

}

export default numbersReducer