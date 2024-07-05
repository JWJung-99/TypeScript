// 서버로 데이터를 보낼 때 사용

const API_SERVER = "http://localhost:3300";

// options: POST, PATCH, DELETE 등 메서드 전달
const useMutation = (url: string, options: RequestInit = {}) => {
  // addOptions: body 등의 데이터 전달
  const send = async (addOptions = {}) => {
    if (!url.startsWith("http")) {
      url = API_SERVER + url;
    }

    options = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
      ...addOptions,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return { send };
};

export default useMutation;
