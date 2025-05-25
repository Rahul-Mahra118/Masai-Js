import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const FetchData: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let data = (await response.json()) as Post[];
        console.log(data);
        setData(data);
      } catch (error: unknown) {
        if (error instanceof Error) console.log("error", error.message);
        else console.log("unknown error");
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      {data &&
        data.map((post: Post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default FetchData;
