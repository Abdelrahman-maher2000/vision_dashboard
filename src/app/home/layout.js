"use client";

import { Container } from "react-bootstrap";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import "../home/home.css";
import NavBar from "../Components/NavBar";
import { Drawer } from "@mui/material";

import { useVars } from "../store";

export default function ({ children }) {
    const open = useVars((state) => {
        return state.open;
    });
    const setOpen = useVars((state) => {
        return state.setOpen;
    });
    return (
        <>
            <div
                style={{ padding: "10px", display: "flex" }}
                className="main"
            >
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                    style={{ zIndex: "10000" }}
                >
                    <Menu Class={"drawerMenu"} />
                </Drawer>
                <Menu Class={"menu"} />
                <div className="content">
                    <div
                        style={{
                            position: "fixed",
                            width: "80%",
                            zIndex: 100,
                        }}
                    >
                        <NavBar />
                    </div>

                    <div
                        style={{
                            flexGrow: "1",
                            marginTop: "120px",
                            marginBottom: "30px",
                        }}
                    >
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
