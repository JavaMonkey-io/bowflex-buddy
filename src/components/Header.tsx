import React from 'react';
import {MenuItem} from "primereact/menuitem";
import {Menubar} from "primereact/menubar";
import {useNavigate} from "react-router-dom";

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

  return <Menubar model={mainMenu} start={start} />
}

export default Header;