"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { signIn, signOut, useSession } from "next-auth/react";
import type { FC } from "react";

const Index: FC = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div>
      <Stack spacing={2} direction="row">
        {user ? (
          <Button variant="contained" color="error" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={() => signIn()}>
            Sign In
          </Button>
        )}
      </Stack>
      {user && (
        <div>
          <p>User Name: {user.name}</p>
          <p>Email Address: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
