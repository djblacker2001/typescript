import React, { useState } from "react";
import UserInfo from "./UserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMagnifyingGlass,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  status: string;
}

const username: string = "nguyenvana";

const Quiz: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1001,
      name: "Transistor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Transistors.agr.jpg/500px-Transistors.agr.jpg",
      price: 1500,
      status: "Đang hoạt động",
    },
  ]);

  // 👉 Thêm sản phẩm
  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      name: "Sản phẩm mới",
      image: "https://via.placeholder.com/80",
      price: 1000,
      status: "Đang hoạt động",
    };
    setProducts([...products, newProduct]);
  };

  // 👉 Xóa sản phẩm
  const deleteProduct = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // 👉 Sửa sản phẩm
  const editProduct = (id: number) => {
    const name = prompt("Tên sản phẩm mới?");
    const price = prompt("Giá mới?");

    if (!name || !price) return;

    setProducts(
      products.map((p) =>
        p.id === id
          ? { ...p, name, price: Number(price) }
          : p
      )
    );
  };

  return (
    <>
      <UserInfo username={username} />

      {/* NAV */}
      <section className="nav">
        <button id="add" onClick={addProduct}>
          <FontAwesomeIcon icon={faPlus} /> Thêm sản phẩm
        </button>

        <select>
          <option>Mới nhất</option>
          <option>A - Z</option>
          <option>Z - A</option>
        </select>

        <input type="text" placeholder="Nhập từ khóa" />
        <button id="searchPro">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </section>

      {/* TABLE */}
      <section className="products">
        <table className="my-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá thành</th>
              <th>Trạng Thái</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>
                  <img src={p.image} width={60} />
                </td>
                <td>{p.price.toLocaleString()} VND</td>
                <td>{p.status}</td>
                <td>
                  <button id="edit" onClick={() => editProduct(p.id)}>
                    <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                  </button>

                  <button id="delete" onClick={() => deleteProduct(p.id)}>
                    <FontAwesomeIcon icon={faTrashCan} /> Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Quiz;
