import React from "react";

export const CommunityCard = ({ firstName, email, avatar }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            src={avatar}
          />
        </div>
        <div>{firstName}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};
