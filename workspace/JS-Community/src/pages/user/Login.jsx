import Submit from "@components/Submit";
import useMutation from "@hooks/useMutation";
import { userState } from "@recoil/user/atoms";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

async function login(formData) {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}

function Login() {
  const setUser = useSetRecoilState(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    values: {
      email: "woook@market.com",
      password: "11111111",
    },
  });

  const navigate = useNavigate();

  const { mutate } = useMutation({
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
          profileImage: resData.item.profileImage.path
            ? resData.item.profileImage.path
            : "/files/00-sample/XPTwYP2nb.png",
          token: resData.item.token,
        });

        alert("로그인 완료!");
        navigate("/");
      } else {
        // API 서버가 에러를 응답
        if (resData.errors) {
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

  // const onSubmit = async (formData) => {
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_SERVER}/users/login`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     const result = await response.json();

  //     if (result.ok === 1) {
  //       setUser({
  //         _id: result.item._id,
  //         name: result.item.name,
  //         email: result.item.email,
  //         profileImage: result.item.profileImage.path
  //           ? result.item.profileImage.path
  //           : "/files/00-sample/XPTwYP2nb.png",
  //         token: result.item.token,
  //       });
  //     } else {
  //       if (result.errors) {
  //         result.errors.forEach((error) =>
  //           setError(error.path, { message: error.msg })
  //         );
  //       } else {
  //         throw new Error(result.message);
  //       }
  //     }

  //     navigate("/");
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  return (
    <main className="min-w-80 p-5 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            로그인
          </h2>
        </div>

        <form onSubmit={handleSubmit(mutate)}>
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
              placeholder="이메일을 입력하세요."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("email", {
                required: "이메일을 입력하세요.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "올바른 이메일 형식이 아닙니다.",
                },
              })}
            />
            {/* 입력값 검증 에러 출력 */}
            {errors.email && (
              <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
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
              placeholder="비밀번호를 입력하세요."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
              })}
            />
            {/* 입력값 검증 에러 출력 */}
            {errors.password && (
              <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
                {errors.password.message}
              </p>
            )}
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

export default Login;
