import React from 'react';
import Header from "./components/Header";
import {HashRouter, Route, Routes} from "react-router-dom";
import ExercisesPage from "./pages/exercises/ExercisesPage";
import WorkoutsPage from "./pages/workouts/WorkoutsPage";
import WorkoutPage from "./pages/workouts/WorkoutPage";

function App() {
  return (
    <HashRouter>
      <Header/>
      <div className="pl-2 pr-2">
      <Routes>
        <Route path="" element={<ExercisesPage />} />
        <Route path="workouts" element={<WorkoutsPage />} />
        <Route path="workout/:id" element={<WorkoutPage />} />
        <Route path="exercises" element={<ExercisesPage />} />
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
