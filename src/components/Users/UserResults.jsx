import React, { useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`https://api.github.com/users`, {
      headers: { Authorization: `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` },
    });

    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <>
      {users ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserResults;
