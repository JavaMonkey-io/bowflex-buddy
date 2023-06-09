import React from 'react';
import parse from 'html-react-parser'
import {Session, Workout, Set, workouts} from "../../data/workouts";
import {exercises} from "../../data/exercises";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {useNavigate} from "react-router-dom";

const WorkoutsPage = () => {

  const navigate = useNavigate();

  const exerciseBodyPart = (s: Set) => {
    return exercises.find((e)=>e.id === s.exerciseId)?.category;
  }

  const exerciseName = (s: Set) => {
    return exercises.find((e)=>e.id === s.exerciseId)?.title;
  }

  const session = (s: Session) => {
    console.log("s", s);
    return (
      <>
        <p className="text-lg font-semibold">{s.name}</p>
        <DataTable value={s.sets} size="small">
          <Column header="Exercise" field="exerciseId" />
          <Column header="Category" body={(s)=>exerciseBodyPart(s)} />
          <Column header="Exercise" body={(s)=>exerciseName(s)} />
          <Column header="Sets" body={(d) => <>{d.setCountMin}-{d.setCountMax}</>} />
          <Column header="Reps" body={(d) => <>{d.repCountMin}-{d.repCountMax}</>} />
        </DataTable>
      </>
    )
  }

  const workout = (w: Workout) => {
    if(w.isCircuit){
      // TODO Work on Circuit Training
      return <></>
    }else{
      console.log("w", w);
      return (
        <AccordionTab header={w.name}>
          <>
            <div className="flex flex-wrap justify-content-between">
              <p><b>Frequency:</b> {w.frequency}</p>
              <p><b>Time:</b> {w.time}</p>
              <Button className="p-button-sm p-2 m-2" label="Do Workout" onClick={()=>navigate('/workout/'+w.id)} />
            </div>
            <p>{parse(w.description)}</p>
            {w.sessions.map((s)=>session(s))}
          </>
        </AccordionTab>
      )
    }

  }

  return (
    <>
      <p className="text-2xl">Workouts</p>
      <Accordion activeIndex={0}>
        {workouts.map((w)=>workout(w))}
      </Accordion>
    </>
  )
}

export default WorkoutsPage;
