import { SignUpButton } from '@clerk/nextjs';
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
      <p className="flex items-center justify-center text-white">
        <SignUpButton mode="modal">
          <button>Sign up</button>
        </SignUpButton>
      </p>
    </div>
  );
}
