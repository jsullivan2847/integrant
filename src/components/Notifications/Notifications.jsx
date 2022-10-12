import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import DropDown from "../DropDown/DropDown";
import { useState, useEffect } from "react";
import { getUserData, retrieveGrant } from "../../utils/user_data";
import { connectDb } from "../../utils/db_listener";
import { supabase } from "../../utils/supabase";

export default function Notifications({ user }) {
  
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const [grants, setGrants] = useState(null);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    getUserData(user).then((data) => setUserData(data))
  }, []);

  const client = connectDb();
  // client.onOpen(() => console.log('socket opened'));
  // client.onClose(() => console.log('socket closed'));

  if(userData){
    const dbChanges = client.channel(
      `realtime:public:grants_data:state=eq${userData.zipcode}`
    );
    dbChanges.subscribe();
  
    dbChanges.on("INSERT", (e) => {
      setActive(true);
      retrieveGrant(userData).then((data) => setGrants(data))
    });
  }

  function handleBellClick() {
    !open ? setOpen(true) : setOpen(false);
    !open && active ? setActive(false) : <></>;
  }
  return (
    <div style={{ position: "relative" }}>
      <FontAwesomeIcon
        onClick={handleBellClick}
        style={{ marginRight: "35px", cursor: "pointer" }}
        icon={faBell}
        size="2x"
        className="highlight"
      />
      {active && <div className="red-dot"></div>}
      {open && (
        <DropDown grants={grants} setGrants={setGrants} setActive={setActive} />
      )}
    </div>
  );
}
