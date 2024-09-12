import React, { useEffect, useState } from "react";
import { Post, Update } from "../api/GetData";

const PostReq = ({ data, setData, edit, setEdit }) => {
  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const postData = async () => {
    try {
      const res = await Post(input);
      if (res.status === 201) {
        setData([...data, res.data]);
        alert("Added New Post !");
        setInput({ title: "", body: "" });
        console.log(res.data);
      } else {
        console.log("Internall Error at posting data");
      }
    } catch (error) {
      console.log("Error Posting Data:", error);
    }
  };
  const updateFunc = async () => {
    try {
      const res = await Update(edit.id, input);
      if (res.status === 200) {
        console.log(res);
        setData((prev) => {
          return prev.map((curEl) => {
            return curEl.id === res.data.id ? res.data : curEl;
          });
        });
        alert("Updation Success !");
        setInput({
          title: "",
          body: "",
        });
        setEdit({});
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let action = e.nativeEvent.submitter.value;
    if (action === "ADD") {
      postData();
    } else if (action === "Edit") {
      updateFunc();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    if (edit) {
      setInput({
        title: edit.title || "",
        body: edit.body || "",
      });
    }
  }, [edit]);

  //Using for Dynamic Value of Edit button
  let isEmpty = Object.keys(edit).length === 0;
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex flex-row justify-center flex-wrap gap-2 py-4 px-1 sm:px-4 rounded-md text-[#333]  scale-[80%] lg:scale-100 bg-slate-800 w-fit mx-auto my-12 text-center text-sm sm:text-base md:text-lg lg:text-xl"
      >
        <input
          type="text"
          required
          name="title"
          placeholder="Add title"
          className="py-2 pl-4 mx-1 rounded-sm font-medium"
          value={input.title}
          onChange={handleChange}
        />
        <input
          type="text"
          required
          name="body"
          placeholder="Add post"
          className="py-2 pl-4 mx-1 rounded-sm font-medium"
          value={input.body}
          onChange={handleChange}
        />
        <button
          type="submit"
          className=" bg-green-400  mx-10 sm:mx-4 py-2 px-10 rounded-md hover:scale-110 hover:bg-green-300 hover:text-white hover:shadow-[0px_2px_4px_green] font-bold transition-all "
          value={isEmpty ? "ADD" : "Edit"}
        >
          {isEmpty ? "ADD" : "Edit"}
        </button>
      </form>
    </>
  );
};

export default PostReq;
