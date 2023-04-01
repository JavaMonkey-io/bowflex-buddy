import React, {useEffect, useState} from 'react';
import {Session, Workout, workouts} from "../../data/workouts";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import SessionComponent from "./SessionComponent";

const WorkoutsPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState<Workout>();
  const [selectedSession, setSelectedSession] = useState<Session>();

  useEffect(() => {
    const w: Workout = workouts.find((w) => w.id === Number(id)) as Workout;
    const s: Session = w.sessions[0] as Session;
    setWorkout(w);
    setSelectedSession(s)
  }, [id])

  if (workout) {
    console.log(workout);
    return (
      <>
        <div className="flex flex-wrap justify-content-between align-items-center">
          <p className="text-2xl">{workout.name}</p>
          {workout.sessions.length > 1 &&
          <div>
            <Dropdown value={selectedSession} options={workout.sessions} optionLabel="name" onChange={(e)=>setSelectedSession(e.target.value)} />
          </div>
          }
        </div>
        <SessionComponent session={selectedSession as Session}></SessionComponent>
      </>
    )
  } else {
    return (
      <>
        <p>Workout not found return to workout list: </p>
        <Button label="Go to Workout List" onClick={() => navigate('/workouts')}/>
      </>
    )
  }
}

export default WorkoutsPage;