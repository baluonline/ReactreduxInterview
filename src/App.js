import React, { useEffect, useRef, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Signin from "./Signin";
import Posts from "./Posts";
import allActions from "./actions";
import axios from "axios";

const App = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [posts, setPosts] = useState([]);
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.users);
  const [bingoNumber, setBingoNumber] = useState(0);

  const dispatch = useDispatch();

  const titleRef = useRef("");
  const user = { name: "Rei" };

  const incrementBingoNumber = () => {
    setBingoNumber((prevBingoNumber) => prevBingoNumber + 1);
  };
  // const child = useCallback(() => <Signin />, []);
  const child = React.memo(Signin);

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
    console.log("use effect");
  }, []);

  useEffect(() => {
    console.log("on mount");
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((resp) => resp.json())
      .then((json) => setPosts(json));
    return () => {
      console.log("Clean up use effect");
      source.cancel();
    };
    this.setPosts((prevPost, props) => {
      console.log("prevState" + JSON.stringify(prevPost));
      return {
        users: prevPost.users,
      };
    });
    if (titleRef && titleRef.current) {
      titleRef.current.innerHTML = "A Changed H1 Element";
    }
  }, [resourceType]);

  const renderPost = (post) => {
    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title || post.name}</td>
      </tr>
    );
  };

  //useCall bank
  const increment = () => (setBingoNumber(bingoNumber+1));
  const memoizedIncrment = useCallback(increment,[resourceType]);

  return (
    <div className="App">
      <div>
        <h1>Counter app</h1>
        <div className="row">
          {bingoNumber} -- <Signin updatedCount={memoizedIncrment}/>
        </div>
        <button className="ma-2" onClick={() => incrementBingoNumber()}>
          +{" "}
        </button>
      </div>
      {currentUser.loggedIn ? (
        <>
          <h1 ref={titleRef}>Text</h1>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button
            onClick={() => dispatch(allActions.userActions.setUser(user))}
          >
            Login as Rei
          </button>
        </>
      )}
      <h1>
        Counter: {counter}
        <Signin />
      </h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase Counter
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrease Counter
      </button>
      <button onClick={() => dispatch(allActions.users.fetchUsers())}>
        Get Users
      </button>
      <div className="row">
        <button className="m-l-1" onClick={() => setResourceType("posts")}>
          posts
        </button>
        <button className="m-l-1" onClick={() => setResourceType("users")}>
          Users
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title/Name</th>
          </tr>
        </thead>
        <Posts userPosts = {posts} />
      </table>
    </div>
  );
};

export default App;
