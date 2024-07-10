import Submit from "@components/Submit";
import useMutation from "@hooks/useMutation";
import { userState } from "@recoil/user/atoms";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";

function CommentNew({ refetch, postId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const user = useRecoilValue(userState);
  const { send } = useMutation(`/posts/${postId}/replies`, {
    method: "POST",
  });

  const onSubmit = async (formData) => {
    await send({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    reset();
    refetch();
  };

  return (
    <>
      {user && (
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <textarea
                rows="3"
                cols="40"
                className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="내용을 입력하세요."
                {...register("content", {
                  required: "내용을 입력하세요.",
                })}
              ></textarea>

              {/* 에러 메세지 출력 */}
              {errors.content && (
                <p className="ml-2 mt-1 text-sm text-red-500">
                  {errors.content.message}
                </p>
              )}
            </div>
            <Submit size="sm">댓글 등록</Submit>
          </form>
        </div>
      )}
    </>
  );
}

export default CommentNew;
