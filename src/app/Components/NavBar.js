"use client";

import { useVars } from "../store";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// icons
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsIcon from "@mui/icons-material/Settings";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";

export default function NavBar() {
    const active = useVars((state) => {
        return state.active;
    });

    const open = useVars((state) => {
        return state.open;
    });
    const setOpen = useVars((state) => {
        return state.setOpen;
    });
    const [backgroundColor, setBackgroundColor] =
        useState("transparent");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setBackgroundColor(" rgba(255, 255, 255, 0.1)");
            } else {
                setBackgroundColor("transparent");
            }
        });
    }, [window.scrollY]);
    return (
        <>
            <Navbar
                expand="lg"
                className="w-100 "
                style={{
                    backgroundColor: backgroundColor,
                    transition: "all 0.3s ",
                    borderRadius: "10px",
                    backdropFilter: "blur(10px)",
                    zIndex: "10000",
                }}
            >
                <Container className="navBAR">
                    <Navbar.Brand
                        href="#home"
                        style={{ color: "white" }}
                        className="d-flex align-items-center gap-2"
                    >
                        <HomeIcon /> / {active}
                    </Navbar.Brand>

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar>
                        <Nav className="ms-auto">
                            <div className="d-flex align-items-center justify-content-between gap-3">
                                <InputGroup
                                    className="Input"
                                    style={{ width: "200px" }}
                                >
                                    <InputGroup.Text
                                        id="basic-addon1"
                                        style={{
                                            backgroundColor:
                                                "#0F1535",
                                            color: "white",
                                            borderRight: "0",
                                        }}
                                    >
                                        <SearchIcon />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Type here..."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        style={{
                                            backgroundColor:
                                                "#0F1535",
                                            color: "white",
                                            borderLeft: "0",
                                        }}
                                    />
                                </InputGroup>
                                <div
                                    style={{
                                        width: "fit-content",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        width: "fit-content",
                                    }}
                                    className="bg-dark p-2 rounded"
                                >
                                    <PersonRoundedIcon />
                                    <div className="icon">
                                        <p className="mb-0">
                                            Sign in
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <SettingsIcon />
                                </div>

                                <div
                                    className="menuIcon"
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                >
                                    <MenuIcon />
                                </div>
                            </div>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    );
}
