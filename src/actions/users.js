import axios from "axios";

const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: "USERS",
          data: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "USERS",
          data: "no data",
        });
      });
  };
};

export default {
  fetchUsers,
};
