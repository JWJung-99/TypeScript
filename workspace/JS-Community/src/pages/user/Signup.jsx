import InputError from "@/components/InputError";
import Submit from "@/components/Submit";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SERVER = import.meta.env.VITE_API_SERVER;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function addUser(formData) {
    try {
      // 이미지 업로드
      if (formData.attach.length > 0) {
        const body = new FormData();
        body.append("attach", formData.attach[0]);

        const fileRes = await fetch(`${SERVER}/files`, {
          method: "POST",
          body,
        });

        const fileJSON = await fileRes.json();

        if (!fileJSON.ok) throw new Error("파일 업로드 실패!");

        formData.profileImage = fileJSON.item[0].path;
      }

      delete formData.attach;
      // 회원 가입
      formData.type = "user";

      const res = await fetch(`${SERVER}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await res.json();

      if (resData.ok) {
        alert(`${resData.item.name}님 회원가입을 환영합니다.`);
      } else {
        // API 서버의 에러 메시지 확인
        if (resData.errors) {
          resData.errors.forEach((error) =>
            setError(error.path, {
              message: error.msg,
            })
          );
        } else if (resData.message) {
          alert(resData.message);
        }
      }
    } catch (err) {
      // 네트워크 에러에 대한 처리
      console.error(err);
    }
  }

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            회원 가입
          </h2>
        </div>

        <form action="/" onSubmit={handleSubmit(addUser)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="name"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("name", {
                required: "이름을 입력하세요.",
                minLength: {
                  value: 2,
                  message: "이름을 두 글자 이상 입력하세요.",
                },
              })}
            />
            <InputError target={errors.name} />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
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
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
              })}
            />
            <InputError target={errors.password} />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="attach"
            >
              프로필 이미지
            </label>
            <input
              type="file"
              id="attach"
              accept="image/*"
              placeholder="이미지를 선택하세요"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              {...register("attach")}
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <Submit>회원가입</Submit>
            <Link
              to="/"
              className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              취소
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
