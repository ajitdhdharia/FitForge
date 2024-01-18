import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);
  console.log('Context',context);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
