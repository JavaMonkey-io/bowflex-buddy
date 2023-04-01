import React from 'react';

interface LabeledTextProps{
  label: string;
  text: string;
}

const LabeledText = (props: LabeledTextProps) => {
  return (
    <>
      <p className="mt-0 mb-0 font-bold">{props.label}</p>
      <p className="mt-0 mb-3 ">{props.text}</p>
    </>
  )
}

export default LabeledText;