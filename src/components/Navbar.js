import React from "react";
import { useContext } from "react";
import { Taskcontext } from "../context/Taskcontext";

const Navbar = () => {
  const {state}=useContext(Taskcontext)

  return (
    <>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">{`Currently ${state.tasklist.length} task(s) pending`}</p>
    </>
  );
};

export default Navbar;
