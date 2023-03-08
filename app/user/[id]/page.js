"use client";

function User() {
  const pathname = window.location.pathname;
  const userId = pathname.substring(6);

  return (
    <div>
      <h1 className="text-white">{userId}</h1>
    </div>
  );
}

export default User;
