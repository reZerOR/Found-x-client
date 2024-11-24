import Container from "@/src/components/ui/Container";
import Post from "@/src/components/ui/Post";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";
import { cookies } from "next/headers";

export default async function FoundItems() {
  cookies()
  const { data } = await axiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}
