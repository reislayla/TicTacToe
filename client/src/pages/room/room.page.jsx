import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// CROSS = 1 --> CIRCLE = 2
import "./room.styles.scss";
import Button from "../../components/button/button.component";
import Github from "../../components/github/github.component";
import ClickToCopy from "../../components/click-to-copy/click-to-copy.component";
import { makeRoomId } from "../../utils";

const RoomPage = () => {
  const [room, setRoom] = useState("");
  const [newRoom, setnewRoom] = useState("");

  useEffect(() => {
    setnewRoom(makeRoomId(8).toUpperCase());
  }, []);

  return (
    <div className="roomPage">
      <div className="create-container">
        <p className="text">
          <em>create</em> a room and copy the <em>ID</em> to invite your
          opponent
        </p>
        <div className="form">
          <ClickToCopy content={newRoom} />
          <Link to={`/game?room=${newRoom}&player=${"cross"}`}>
            <Button content="create" />
          </Link>
        </div>
      </div>
      <div className="join-container">
        <p className="text">
          or <br />
          <em>join</em> an existing room by copying the link{" "}
        </p>
        <div className="form">
          <input
            maxlength="8"
            className="input-text"
            placeholder="Paste id here"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <Link to={`/game?room=${room}&player=${"circle"}`}>
            <Button content="join" />
          </Link>
        </div>
        <Github />
      </div>
    </div>
  );
};

export default RoomPage;
