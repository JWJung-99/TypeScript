import InputError from "@/components/InputError";
import Submit from "@/components/Submit";
import { userState } from "@/recoil/user/atoms";
import { ApiResWithValidation, SingleItem, User } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

type LoginForm = {
  email: string;
  password: string;
};

const SERVER = import.meta.env.VITE_API_SERVER;

async function login(
  formData: LoginForm
): Promise<ApiResWithValidation<SingleItem<User>, LoginForm>> {
  const res = await fetch(`${SERVER}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>();
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  // useMutation<TData = unknown, TError = DefaultError, TVariables = void, ...>
  // TData: mutationFn의 return 타입 (resData의 타입)
  // TError: Error 발생 시 타입 지정 (err의 타입)
  // TVariables: mutationFn 인자값의 타입 (formData의 타입)
  const { mutate } = useMutation<
    ApiResWithValidation<SingleItem<User>, LoginForm>,
    Error,
    LoginForm
  >({
    mutationFn(formData) {
      return login(formData); // mutate가 호출될 때 mutationFn이 실행 => handeSubmit 검증이 끝나면 mutate 호출
    },
    onSuccess(resData) {
      // 서버와 통신 성공
      if (resData.ok) {
        // 로그인 상태 저장
        setUser({
          _id: resData.item._id,
          name: resData.item.name,
          email: resData.item.email,
          profile: resData.item.profileImage,
          accessToken: resData.item.token!.accessToken, // 성공 시 서버는 항상 토큰을 전송함 => 타입 단언 가능 (non-null assertion)
          refreshToken: resData.item.token!.refreshToken,
        });

        alert("로그인 완료!");
        navigate("/");
      } else {
        // API 서버가 에러를 응답
        if ("errors" in resData) {
          resData.errors.forEach((error) =>
            setError(error.path, { message: error.msg })
          );
        } else if (resData.message) {
          alert(resData.message);
        }
      }
    },
    onError(err) {
      // 네트워크 에러 발생
      console.error(err.message);
      alert("잠시 후 다시 시도해주세요.");
    },
  });

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            어쩌라고
          </h2>
        </div>

        <form
          action="/"
          onSubmit={handleSubmit((formData) => mutate(formData))}
          // mutate 자체는 mutationFn을 실행시키는 역할일 뿐 매개변수를 받는 것이 아니기 때문에 매개변수를 전달할 수 있는 익명함수를 생성해야 한다.
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("email", {
                required: "이메일을 입력하세요.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              })}
            />
            <InputError target={errors.email} />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
              })}
            />
            <InputError target={errors.password} />
            <Link
              to="#"
              className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Submit>로그인</Submit>
            <Link
              to="/user/signup"
              className="ml-8 text-gray-800 hover:underline"
            >
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
