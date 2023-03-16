import React from "react";
import { useLocation } from "react-router-dom";

function PostDetails() {
  const { state} = useLocation();
  if (!state.post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex m-auto my-20 justify-center items-center ">
      <div className="w-full flex rounded-lg shadow-md lg:max-w-sm">
        <div className="p-4">
          <h4 className="text-xl font-semibold text-blue-600">
            {state.post.title}
          </h4>
          <p className="mb-2 leading-normal">{state.post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;


