import React from 'react';

interface LabeledListProps{
  label: string;
  list: string[];
  centerLabel?: boolean
}

const LabeledList = (props: LabeledListProps) => {

  let centerClass = "";

  if(props.centerLabel){
    centerClass=" text-center";
  }

  return (
    <>
      <p className={`mt-0 mb-0 font-bold ${centerClass}`}>{props.label}</p>
      <ul className="mt-0 mb-0">
        {props.list.map((i,k)=><li key={k}>{i}</li>)}
      </ul>
    </>
  )
}

export default LabeledList;