import {getUsers, postFollow, deleteUnfollow} from "../api/api"

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   fullName: "Мари Шторм",
    //   photoUrl:
    //     "https://sun9-81.userapi.com/impg/c855532/v855532217/2136f0/FDFt79hhovQ.jpg?size=2138x1680&quality=96&sign=a64332eb2ac7bc7e917df519168ad0cb&type=album",
    //   status: "хочу стать js-стриптизером",
    //   location: { city: "Murmansk", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   fullName: "Никита Кальян",
    //   photoUrl:
    //     "https://sun9-46.userapi.com/impg/6HE0abHUkrK9Ke_KumnK1Td7VwfjPAogEVneBw/rZc6JKrVDPU.jpg?size=1920x1440&quality=96&sign=646ad84267da628c8781f95302889a66&type=album",
    //   status: "жизнь - игра, а мы в ней пешки, а я кушаю пельмешки",
    //   location: { city: "Cheboksary", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   fullName: "Хаски Мен",
    //   photoUrl:
    //     "https://sun9-10.userapi.com/impg/Y98ahL09qw8fvGaCUPCJ1taIkWcaGWewN7jIgw/Tsso-6hRbXs.jpg?size=564x564&quality=96&sign=16ae910f5e035029be70272137a4c5d6&type=album",
    //   status: "я не рэпер",
    //   location: { city: "Marpassat", country: "Russia" },
    // },
    // {
    //   id: 4,
    //   followed: true,
    //   fullName: "Влад Машина",
    //   photoUrl:
    //     "https://sun9-88.userapi.com/impg/qulYW6Vn1l9n3qE5UAJp-QcVc2l1REOCcbd7dg/ShnM0euJJuA.jpg?size=2560x1696&quality=96&sign=5166677ca9930e7d81370118813a4622&type=album",
    //   status: "люблю свой пассатик)",
    //   location: { city: "Nizhny Novgorod", country: "Russia" },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 5,
  currentPage: 1,
  isFetching: false,
  followingIsProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingIsProgress: action.isFetching
          ? [...state.followingIsProgress, action.userId]
          : state.followingIsProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize, pageNumber) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber))
    getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
      
    });
  }
}

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    postFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
        dispatch(toggleIsFollowingProgress(false, userId));
      });
  }
}

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    deleteUnfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollow(userId))
      } 
      dispatch(toggleIsFollowingProgress(false, userId));
      });
  }
}

export default usersReducer;
