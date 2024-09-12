import React, { useEffect, useState } from "react";
import { Delete, Posts } from "../api/GetData";
import PostReq from "./PostReq";

const Main = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({});

  const delHandler = async (id) => {
    try {
      const res = await Delete(id);
      if (res.status === 200) {
        const updatedState = data.filter((cur) => {
          return cur.id !== id;
        });
        alert("Deletion Succesful!");
        console.log("Success !");
        setData(updatedState);
      } else {
        console.log("Error Deleting data !");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleEdit = (item) => setEdit(item);
  useEffect(() => {
    console.log({ edit });
    const getPostData = async () => {
      try {
        const res = await Posts();
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getPostData();
  }, []);
  return (
    <>
      <PostReq data={data} setData={setData} edit={edit} setEdit={setEdit} />
      <div className="flex flex-wrap justify-center gap-2 sm:my-20 my-5 mt-8 sm:mx-40 mx-10 ">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <div className="bg-slate-800 text-white m-2 w-fit md:text-auto text-sm pb-12 pt-4 px-4 border-l-2 rounded-md border-white overflow-hidden ">
                <h1 className="font-extrabold mb-5">{item.id}.</h1>
                <h1 className="font-medium mb-5 break-words">
                  Title:{" "}
                  {item.title ? item.title.slice(0, 15) : "Not performed slice"}
                </h1>
                <p className="break-words lg:max-w-[210px] xl:max-w-[420px] 2xl:max-w-[350px]">
                  {item.body ? item.body.slice(0, 120) : "Not data available"}
                </p>
                <button
                  type="button"
                  className="bg-green-400 py-[2px] text-black px-6 rounded-sm mt-4 mx-1 hover:scale-110 hover:text-white hover:bg-green-300 hover:shadow-[0px_4px_4px_green] font-medium transition-all "
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-400 py-[2px] text-black px-5 rounded-sm  mt-4 mx-1 hover:scale-110 hover:text-white hover:bg-red-300 hover:shadow-[0px_2px_4px_red] font-medium transition-all "
                  onClick={() => delHandler(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </>
  );
};

export default Main;
