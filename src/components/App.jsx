import React from "react"
import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"

export const App = ({ user, data }) => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        users={data}
      />
    </div>
  );
};