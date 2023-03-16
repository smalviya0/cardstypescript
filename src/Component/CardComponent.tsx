import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title : string;
  body: string;
}

export default function CardComponent(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4">
        {posts.map((item) => (
          <div
            className="w-full rounded-lg shadow-md lg:max-w-sm"
            key={item.id}
          >
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {item.title}
              </h4>
              <p className="mb-2 leading-normal">{item.body}</p>
              <Link
                // to={{ pathname: "/post", state: { post: item } }}
                to={"/post"} state={ {post: item }} 
                className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}



