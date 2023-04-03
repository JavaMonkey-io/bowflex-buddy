import React from 'react';
import {MenuItem} from "primereact/menuitem";
import {Menubar} from "primereact/menubar";
import {useNavigate} from "react-router-dom";
import {Message} from "primereact/message";

const Header = () => {

  const navigate = useNavigate();

  const mainMenu: MenuItem[] = [
    {
      label: "Workouts",
      command: ()=>navigate('/workouts'),
    },
    {
      label: "Exercises",
      command: ()=>navigate('/exercises'),
    }
  ]

  const start = () => {
    return (
      <>
        <p className="text-3xl m-0 logo mr-4" onClick={() => navigate('/')}>Bowflex Buddy</p>
      </>
    )
  }

  const end = () => {
    return (
      <>
        <Message severity="info" text="Work in progress" />
      </>
    )
  }

  return <Menubar model={mainMenu} start={start} end={end} />
}

export default Header;