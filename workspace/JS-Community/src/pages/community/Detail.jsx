import Submit from "@/components/Submit";
import CommentList from "@/pages/community/CommentList";
import { userState } from "@/recoil/user/atoms";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const SERVER = import.meta.env.VITE_API_SERVER;

async function fetchPost(_id) {
  const url = `${SERVER}/posts/${_id}`;
  const res = await fetch(url); // Promise 객체 반환
  return res.json();
}

export default function Detail() {
  const { type, _id } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: [type, _id],
    queryFn: () => {
      return fetchPost(_id);
    },
    // 응답 받은 데이터를 가공: queryFn의 return 값이 select의 인자 값 => select의 return 값이 최종 data
    select: (response) => response.item,
    staleTime: 1000 * 3,
  });
  const user = useRecoilValue(userState);

  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <form action={`/${type}`}>
          <div className="font-semibold text-xl">제목 : {data?.title}</div>
          <div className="text-right text-gray-400">
            작성자 : {data?.user.name}
          </div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
                {data?.content}
              </pre>
            </div>
            <hr />
          </div>
          <div className="flex justify-end my-4">
            <Link
              to={`/${type}`}
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              목록
            </Link>
            {user?._id === data?.user._id && (
              <>
                <Link
                  to={`/${type}/${_id}/edit`}
                  className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
                >
                  수정
                </Link>
                <Submit bgColor="red">삭제</Submit>
              </>
            )}
          </div>
        </form>
      </section>

      {/* 부분 화면 로딩중 */}
      {isLoading && (
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-lg font-semibold">잠시만 기다려주세요.</h3>
          <span>로딩중...</span>
        </div>
      )}

      {/* <CommentList replies={data?.replies} /> */}
      <CommentList />
    </main>
  );
}
