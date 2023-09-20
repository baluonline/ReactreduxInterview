import React from "react";

const PostDetails = ( { postData } ) => {
  return (
    <React.Fragment key={postData.id}>
      <tr key={postData.id}>
        <td>{postData.id}</td>
        <td>{postData.title || postData.name}</td>
      </tr>
    </React.Fragment>
  );
};

export default React.memo(PostDetails);