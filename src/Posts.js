import React from "react";
import PostDetails from "./PostDetails"

const Posts = ({ userPosts }) => {
  return (
    <React.Fragment>
      <tbody>
        {userPosts
          ? userPosts.map((post) => {
              return (
              <PostDetails key={post.id} postData={post} />
              );
            })
          : `No data`}
      </tbody>
    </React.Fragment>
  );
};

export default React.memo(Posts);
