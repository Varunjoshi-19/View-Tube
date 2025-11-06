import { trpc } from "@/trpc/server";
import React from 'react';
import { PageClient } from "./client";

const Home = async () => {

void trpc.hello.prefetch({ text : "Varun joshi" });

  return (
    <div>
      <PageClient/>
    </div>
  )

};

export default Home;