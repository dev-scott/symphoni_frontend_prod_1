"use client";

import Image from "next/image";
import page from "@/app/(route)/create-subscription/page";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/create-subscription");
  }, []);

  return null;
}
