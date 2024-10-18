import React, { useEffect } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { useDispatch } from "react-redux";
import { loadingTask } from "./redux/features/taskSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingTask());
  }, []);
  return (
    <div className=" relative w-full h-screen bg-zinc-700">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
