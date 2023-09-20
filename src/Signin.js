import React, { useMemo } from "react";
const Signin =  ({ updatedCount }) => {
  console.log("render");
  return (
    <React.Fragment>
      <div className="col-12 signin-page">
        <button onClick={updatedCount}>Child Component</button>
      </div>
    </React.Fragment>
  );
};
// export default React.memo(Signin);
export default Signin;
