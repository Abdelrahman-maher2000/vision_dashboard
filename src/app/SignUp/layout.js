"use client";

import "../SignUp/signup.css";
import { useEffect } from "react";

export default function ({ children }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return <>{children}</>;
}
