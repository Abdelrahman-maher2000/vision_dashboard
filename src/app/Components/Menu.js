"use client";

// icons
import HomeIcon from "@mui/icons-material/Home";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import { useEffect, useState } from "react";
import { useVars } from "../store";
import Link from "next/link";

export default function Menu({ Class }) {
    useEffect(() => {
        setActive(window.localStorage.getItem("Active"));
    }, []);

    let active = useVars((state) => {
        return state.active;
    });
    let setActive = useVars((state) => {
        return state.setActive;
    });
    const setOpen = useVars((state) => {
        return state.setOpen;
    });
    return (
        <>
            <div className={Class}>
                <h5
                    style={{
                        letterSpacing: "8px",
                        textAlign: "center",
                    }}
                    className="head"
                >
                    VISION UI
                </h5>
                <hr
                    className="w-75 "
                    style={{ margin: "31px auto 22.5px auto" }}
                ></hr>

                <Link
                    href={"/home"}
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <div
                        className={
                            active == "dashboard"
                                ? "item active"
                                : "item"
                        }
                        onClick={() => {
                            setActive("dashboard");
                            setOpen(false);
                            window.localStorage.setItem(
                                "Active",
                                "dashboard"
                            );
                        }}
                    >
                        <div className="icon d-flex align-items-center justify-content-center">
                            <HomeIcon color="white" />
                        </div>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "0",
                            }}
                        >
                            Dashboard
                        </p>
                    </div>
                </Link>
                <Link
                    href={"/home/Tables"}
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <div
                        className={
                            active == "tables"
                                ? "item active"
                                : "item"
                        }
                        onClick={() => {
                            setActive("tables");
                            setOpen(false);
                            window.localStorage.setItem(
                                "Active",
                                "tables"
                            );
                        }}
                    >
                        <div className="icon d-flex align-items-center justify-content-center">
                            <AssessmentOutlinedIcon color="white" />
                        </div>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "0",
                            }}
                        >
                            Tables
                        </p>
                    </div>
                </Link>

                <Link
                    href={"/home/Billings"}
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <div
                        className={
                            active == "billings"
                                ? "item active"
                                : "item"
                        }
                        onClick={() => {
                            setActive("billings");
                            setOpen(false);
                            window.localStorage.setItem(
                                "Active",
                                "billings"
                            );
                        }}
                    >
                        <div className="icon d-flex align-items-center justify-content-center">
                            <CreditCardIcon color="white" />
                        </div>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "0",
                            }}
                        >
                            billings
                        </p>
                    </div>
                </Link>

                <h6
                    style={{
                        textTransform: "uppercase",
                        cursor: "text",
                    }}
                    className="item"
                >
                    ِAccount Pages
                </h6>
                <Link
                    href={"/home/Profile"}
                    style={{ color: "white", textDecoration: "none" }}
                >
                    <div
                        className={
                            active == "Profile"
                                ? "item active"
                                : "item"
                        }
                        onClick={() => {
                            setActive("Profile");
                            setOpen(false);
                            window.localStorage.setItem(
                                "Active",
                                "Profile"
                            );
                        }}
                    >
                        <div className="icon d-flex align-items-center justify-content-center">
                            <PersonIcon color="white" />
                        </div>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "0",
                            }}
                        >
                            Profile
                        </p>
                    </div>
                </Link>

                <Link
                    href={"/SignIn"}
                    style={{ color: "white", textDecoration: "none" }}
                >
                    <div
                        className={
                            active == "signin"
                                ? "item active"
                                : "item"
                        }
                        onClick={() => {
                            setActive("signin");
                            setOpen(false);
                            window.localStorage.setItem(
                                "Active",
                                "signin"
                            );
                        }}
                    >
                        <div className="icon d-flex align-items-center justify-content-center">
                            <ContactPageIcon color="white" />
                        </div>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "0",
                            }}
                        >
                            Sign In
                        </p>
                    </div>
                </Link>

                <Link
                    href={"/SignUp"}
                    style={{ color: "white", textDecoration: "none" }}
                >
                    <div
                        className={
                            active == "signup"
                                ? "item active"
                                : "item"
                        }
                        onClick={() => {
                            setActive("signup");
                            setOpen(false);
                            window.localStorage.setItem(
                                "Active",
                                "signup"
                            );
                        }}
                    >
                        <div className="icon d-flex align-items-center justify-content-center">
                            <RocketLaunchIcon color="white" />
                        </div>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "0",
                            }}
                        >
                            Sign Up
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}
