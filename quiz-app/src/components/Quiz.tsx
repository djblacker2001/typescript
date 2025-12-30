import React from "react";
import UserInfo from "./UserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";



const username: string = "nguyenvana";

const Quiz: React.FC = () => {
  return (
    <>
      <UserInfo username={username} />
      <div className="nav">
        <button>
          <FontAwesomeIcon icon={faPlus} /> Thêm sản phẩm
        </button>
        <select>
          <option value="1">Mới nhất</option>
          <option value="2">A - Z</option>
          <option value="3">Z - A</option>
        </select>
        <input type="text" placeholder="Nhập từ khóa" />
      </div>


    </>
  );
};

export default Quiz;
