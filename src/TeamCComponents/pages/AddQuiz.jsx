import React from "react";
import "../css/addquiz.css";
import { IoIosAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import Pagination from "react-bootstrap/Pagination";

const AddQuiz = () => {
  return (
    <>
      <div className="container mt-5">
        <form className="p-3">
          <div className="">
            <div className="">
              <div className="d-flex justify-content-between align-items-center">
                <span className="mr-auto">
                  <p className="AddQuizTitle">Topic 1: Quiz</p>
                </span>
                <span className="">
                  <button className="teamcquizbtn btn btn-lg btn-success roboto-bold">
                    <IoIosAdd />
                  </button>
                </span>
              </div>
            </div>

            <div className="container text-center">
              <textarea
                className="form-control p-4 mb-4"
                rows="5"
                placeholder="Add question here..."
              />
              <div className="row justify-content-center">
                <div className="col-lg-6 mb-3">
                  <input className="form-control" placeholder="Option 1" />
                </div>
                <div className="col-lg-6 mb-3">
                  <input className="form-control" placeholder="Option 2" />
                </div>
                <div className="col-lg-6 mb-3">
                  <input className="form-control" placeholder="Option 3" />
                </div>
                <div className="col-lg-6 mb-3">
                  <input className="form-control" placeholder="Option 4" />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4 mb-4">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="">
        <div className="row justify-content-center">
          <div className="d-flex justify-content-center align-items-center">
            <span>
              <button className="btn btn-lg btn-success py- px-4 m-3 bg-op-6 roboto-bold">
                <FaTrashAlt />
              </button>
            </span>

            <span>
              <button className="btn btn-lg btn-success py-2 px-4 m-3 bg-op-6 roboto-bold">
                <IoIosSave />
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuiz;
