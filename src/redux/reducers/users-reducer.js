const SET_USERS = "friendfinder/users/SET_USERS"

const initialState = {
    users: [
        {
            userID: 1,
            userFirstName: "Sophia",
            userLastName: "Page",
            userAvatar: "http://placehold.it/300x300",
            userSpecialization: "Software Engineer",
            userDistance: "500m away",
            isFriend: true
        },
        {
            userID: 2,
            userFirstName: "Emma",
            userLastName: "Johnson",
            userAvatar: "http://placehold.it/300x300",
            userSpecialization: "Model at Fashion",
            userDistance: "899m away",
            isFriend: true
        },
        {
            userID: 3,
            userFirstName: "Nora",
            userLastName: "Johnson",
            userAvatar: "http://placehold.it/300x300",
            userSpecialization: "Writer at Newspaper",
            userDistance: "2.5k away",
            isFriend: true
        },
        {
            userID: 4,
            userFirstName: "Diana",
            userLastName: "Amber",
            userAvatar: "http://placehold.it/300x300",
            userSpecialization: "Student",
            userDistance: "1.5k away",
            isFriend: true
        },
        {
            userID: 5,
            userFirstName: "Aleksey",
            userLastName: "Kukva",
            userAvatar: "http://placehold.it/300x300",
            userSpecialization: "Developer",
            userDistance: "2.5k away",
            isFriend: false
        },
        {
            userID: 6,
            userFirstName: "Kolu",
            userLastName: "Sidor",
            userAvatar: "http://placehold.it/300x300",
            userSpecialization: "Gamer",
            userDistance: "1.5k away",
            isFriend: false
        }
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        default :
            return state
    }
}


export const setUsers = (users) => ({type: SET_USERS, users})


export default usersReducer