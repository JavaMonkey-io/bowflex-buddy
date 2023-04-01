import React, {useEffect} from 'react';
import {exercises} from "../../data/exercises";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const ExercisesPage = () => {


  return (
    <>
      <p className="text-2xl">ExercisesPage</p>
      <DataTable value={exercises}>
        <Column header="ID" field="id" filter filterField="id"/>
        <Column header="Title" field="title" filter filterField="title"/>
        <Column header="Sub Title" field="subTitle" filter filterField="subTitle"/>
      </DataTable>
    </>
  )
}

export default ExercisesPage;