import { TodoItemData } from "#types/todo";
import Button from "@components/Button";
import Submit from "@components/Submit";
import useMutation from "@hooks/useMutation";
import { useState } from "react";

interface Props {
  item: TodoItemData;
  refetch: () => Promise<void>;
}

function TodoItem({ item, refetch }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.title);
  const { send } = useMutation(`/todos/${item.id}`);

  // 수정 모드로 변경
  const handleEdit = () => {
    setEditMode(true);
  };

  // 수정 사항 저장
  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await send({
        method: "PATCH",
        body: JSON.stringify({ title }),
      });
      refetch();
    } catch (err) {
      if (err instanceof TypeError) {
        // 네트워크 에러
        console.error("Network Error");
      } else if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  // 수정 취소
  const handleCancel = () => {
    setTitle(item.title);
    setEditMode(false);
  };

  // 완료/미완료 처리
  const handleDone = async () => {
    try {
      await send({
        method: "PATCH",
        body: JSON.stringify({ done: !item.done }),
      });
      refetch();
    } catch (err) {
      if (err instanceof TypeError) {
        // 네트워크 에러
        console.error("Network Error");
      } else if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  // 삭제
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await send({
        method: "DELETE",
      });
      refetch();
    } catch (err) {
      if (err instanceof TypeError) {
        // 네트워크 에러
        console.error("Network Error");
      } else if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <>
      <li className="flex justify-between p-2 border-b-2 border-gray-200">
        <form className="flex-grow flex item-center">
          {editMode ? (
            <input
              className="flex-grow border-2 border-gray-300 p-1 rounded-lg"
              type="text"
              value={title}
              placeholder="내용을 입력하세요."
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <span
              className={`${
                item.done ? "line-through text-gray-400" : ""
              } cursor-pointer`}
              onClick={handleDone}
            >
              {item.title}
            </span>
          )}

          <div className="flex ml-auto">
            {editMode ? (
              <>
                <Submit bgColor="blue" onClick={handleSave}>
                  저장
                </Submit>
                <Button onClick={handleCancel}>취소</Button>
              </>
            ) : (
              <>
                <Button bgColor="blue" onClick={handleEdit}>
                  수정
                </Button>
                <Submit bgColor="red" onClick={handleDelete}>
                  삭제
                </Submit>
              </>
            )}
          </div>
        </form>
      </li>
    </>
  );
}

export default TodoItem;
