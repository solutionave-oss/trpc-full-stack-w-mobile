"use client";

import { client } from "@/utils/trpc";
import { useEffect } from "react";



export default function Index() {
  useEffect(()=>{
    client.test.query({test:"Hello AB"}).then(value => {
      console.log(value.message);
    })
  },[])
  return (
    <div>Hello</div>
  );
};
