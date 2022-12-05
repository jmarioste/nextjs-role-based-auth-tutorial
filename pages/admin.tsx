import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const AdminPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Admin Page</h1>

          <Link className="btn" href="/">
            Go to Index Page
          </Link>
          <button className="btn btn-outline" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
