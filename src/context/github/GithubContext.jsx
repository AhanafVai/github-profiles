import { createContext, useReducer } from "react";
import githubReducer from "../github/GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // get Search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `${GITHUB_TOKEN}` },
    });

    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // single user
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `${GITHUB_TOKEN}` },
    });

    const data = await res.json();

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: { Authorization: `${GITHUB_TOKEN}` },
    });

    const data = await res.json();

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    }
  };

  // clear
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  // set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        getUser,
        getUserRepos,
        clearUsers,
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
