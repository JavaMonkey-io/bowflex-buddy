import React, {useEffect, useState} from 'react';
import {Session, Set} from "../../data/workouts";
import {Button} from "primereact/button";
import {Exercise, exercises} from "../../data/exercises";
import LabeledText from "../../components/LabeledText";
import LabeledList from "../../components/LabeledList";

interface SessionComponentProps {
  session: Session
}

const SessionComponent = (props: SessionComponentProps) => {
  const sets: Set[] = props.session.sets;
  const [setId, setSetId] = useState(0);
  const [currentExercise, setCurrentExercise] = useState<Exercise>();

  useEffect(() => {
    const e = exercises.find(e => e.id === sets[setId].exerciseId);
    setCurrentExercise(e);
  }, [setId])


  const doPrev = () => {
    setSetId(setId - 1)
  }

  const doNext = () => {
    setSetId(setId + 1)
  }

  return (

    <>
      {currentExercise &&
          <>
              <div className="flex justify-content-between align-items-center">
                  <Button icon="pi pi-arrow-left" disabled={setId == 0} onClick={doPrev}/>
                  <div className="flex flex-column justify-content-center align-items-center">
                      <p className="m-0 p-0"><b>{currentExercise.title}</b></p>
                      <p className="m-0 p-0">{currentExercise.subTitle}</p>
                  </div>
                  <Button icon="pi pi-arrow-right" disabled={setId == sets.length - 1} onClick={doNext}/>
              </div>
              <hr/>
              <div className="flex justify-content-center align-items-center gap-4">
                  <p><b>Sets:</b> {sets[setId].setCountMin} - {sets[setId].setCountMax}</p>
                  <p><b>Reps:</b> {sets[setId].repCountMin} - {sets[setId].repCountMax}</p>
              </div>
              <div className="flex justify-content-between flex-wrap">
                  <div className="md:w-4">
                      <div className="flex">
                          <div>
                              <LabeledText label="Muscles worked:" text={currentExercise.musclesWorked}/>
                              <LabeledText label="Position:" text={currentExercise.position}/>
                              <LabeledText label="Accessory:" text={currentExercise.accessory}/>
                              <LabeledText label="Pulleys:" text={currentExercise.pulleys}/>
                              <LabeledText label="Before you begin:" text={currentExercise.beforeYouBegin}/>
                              <LabeledList label="Key Points:" list={currentExercise.keyPoints}/>
                              <div className="mb-8"></div>
                          </div>
                          <div>
                              <img src={require(`../../assets/image/${currentExercise.id}-muscle.png`)} />
                          </div>
                      </div>
                  </div>
                  <div className="md:w-4 flex flex-column align-items-center">
                      <img src={require(`../../assets/image/${currentExercise.id}-start.png`)} height={200} />
                      <LabeledList label="Start"  centerLabel={true} list={currentExercise.start}/>
                      <div className="mb-8"></div>
                  </div>
                  <div className="md:w-4 flex flex-column align-items-center">
                      <img src={require(`../../assets/image/${currentExercise.id}-action.png`)} height={200} />
                      <LabeledList label="Action" centerLabel={true} list={currentExercise.keyPoints}/>
                  </div>
              </div>
          </>
      }
    </>
  )
}

export default SessionComponent;