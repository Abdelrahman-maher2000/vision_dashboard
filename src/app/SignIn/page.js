"use client";

import { Button, Switch, TextField } from "@mui/material";
import Link from "next/link";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useVars } from "../store";

// icons
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useEffect } from "react";

export default function SignIn() {
    const setActive = useVars((state) => {
        return state.setActive;
    });
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
        <>
            <div className="signin-navbar">
                <nav class="navbar navbar-expand-lg w-75 m-auto">
                    <div class="container-fluid">
                        <div className="header">
                            <p
                                style={{
                                    fontSize: "14px",
                                    margin: "0",
                                }}
                            >
                                VISION UI FREE
                            </p>
                            <button
                                class="navbar-toggler "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul class="navbar-nav ms-auto gap-5">
                                <li class="nav-item">
                                    <Link
                                        href={"/home"}
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        onClick={() => {
                                            setActive("dashboard");
                                            window.localStorage.setItem(
                                                "Active",
                                                "dashboard"
                                            );
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-1">
                                            <ViewInArIcon />
                                            <p className="text-uppercase fw-bold mb-0">
                                                Dashboard
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        href={"/home/Profile"}
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        onClick={() => {
                                            setActive("Profile");
                                            window.localStorage.setItem(
                                                "Active",
                                                "Profile"
                                            );
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-1">
                                            <PersonIcon />
                                            <p className="text-uppercase fw-bold mb-0">
                                                Profile
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        href={"/SignUp"}
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        onClick={() => {
                                            setActive("signup");
                                            window.localStorage.setItem(
                                                "Active",
                                                "signup"
                                            );
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-1">
                                            <AccountCircleIcon />
                                            <p className="text-uppercase fw-bold mb-0">
                                                Sign Up
                                            </p>
                                        </div>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link
                                        href={"/SignIn"}
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        onClick={() => {
                                            setActive("signin");
                                            window.localStorage.setItem(
                                                "Active",
                                                "signin"
                                            );
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-1">
                                            <VpnKeyIcon />
                                            <p className="text-uppercase fw-bold mb-0">
                                                Sign In
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="signin">
                <div className="banner">
                    <p style={{ fontSize: "20px" }}>
                        INSPIRED BY THE FUTURE:
                    </p>
                    <p
                        style={{
                            fontSize: "36px",
                            fontWeight: "bold",
                            letterSpacing: "10px",
                        }}
                    >
                        THE VISION UI DASHBOARD
                    </p>
                </div>
                <div className="inputs">
                    <div>
                        <p
                            style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                marginBottom: "14px",
                            }}
                        >
                            Nice to see you!
                        </p>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "gray",
                                marginBottom: "35px",
                            }}
                        >
                            Enter your email and password to sign in
                        </p>
                        <div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    marginBottom: "5px",
                                }}
                            >
                                Email
                            </p>
                            <TextField
                                variant="outlined"
                                label="Your email address"
                                sx={{
                                    color: "white",
                                    borderRadius: "14px",
                                    "& .MuiInputBase-input": {
                                        color: "white",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    marginTop: "25px",
                                    marginBottom: "5px",
                                }}
                            >
                                Password
                            </p>
                            <TextField
                                variant="outlined"
                                label="Your Password"
                                type="password"
                                sx={{
                                    color: "white",
                                    borderRadius: "14px",
                                    "& .MuiInputBase-input": {
                                        color: "white",
                                    },
                                }}
                            />
                            <div
                                className="d-flex gap-2"
                                style={{
                                    alignItems: "center",
                                    marginTop: "24px",
                                }}
                            >
                                <Switch defaultChecked {...label} />
                                <p
                                    style={{
                                        fontSize: "12px",
                                        margin: "0",
                                    }}
                                >
                                    Remember me
                                </p>
                            </div>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "100%",
                                    borderRadius: "12px",
                                    marginTop: "35px",
                                }}
                            >
                                Sign In
                            </Button>
                            <div
                                style={{
                                    marginTop: "24px",
                                }}
                            >
                                <span style={{ fontSize: "14px" }}>
                                    Don't have an account?
                                </span>
                                <span>
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            fontWeight: "bold",
                                            color: "white",
                                            fontSize: "14px",
                                        }}
                                        href={"/SignUp"}
                                    >
                                        Sign up
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
