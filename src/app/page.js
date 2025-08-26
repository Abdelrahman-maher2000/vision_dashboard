"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.localStorage.setItem("Active", "dashboard");
        redirect("/home");
    }, []);
    return <></>;
}
