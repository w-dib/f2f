"use client";

import { useSession } from "next-auth/react";

function Dashboard() {
  const { data: session } = useSession();
  return <div>Dashboard</div>;
}

export default Dashboard;
