"use client";

import CarInfoChart from "@/app/Components/CarInfoChart";
import CarInfoCircle from "@/app/Components/CarInfoCircle";
import { ArrowRight, CopyAll } from "@mui/icons-material";

// icons
import BuildIcon from "@mui/icons-material/Build";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import BoltIcon from "@mui/icons-material/Bolt";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Avatar, AvatarGroup, Button, Switch } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Profile() {
    return (
        <>
            <div className="profilehead">
                <div>
                    <div>
                        <p
                            style={{ fontSize: "18px" }}
                            className="mb-0"
                        >
                            Mark Johnson
                        </p>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "gray",
                            }}
                            className="mb-0 fw-bold"
                        >
                            mark@simmmple.com
                        </p>
                    </div>
                </div>
                <div className=" options" style={{ gap: "42px" }}>
                    <button
                        className="btn btn-primary"
                        style={{ padding: "10px 35px" }}
                    >
                        <></>
                        <p className="mb-0">OVERVIEW</p>
                    </button>
                    <div className="d-flex align-items-center gap-1">
                        <CopyAll
                            style={{ fontSize: "18px", margin: "0" }}
                        />
                        <p className="mb-0">TEAMS</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <BuildIcon
                            style={{
                                fontSize: "18px",
                                margin: "0",
                                transform: "rotate(90deg)",
                            }}
                        />
                        <p className="mb-0">PROJECTS</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div
                    className="welcomeback"
                    style={{
                        background:
                            "url(/fakurian-design.png) no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "20px",
                        padding: "31px 114px 44px 35px",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                    }}
                >
                    <div>
                        <h1 style={{ fontSize: "30px" }}>
                            Welcome back!
                        </h1>
                        <p
                            style={{
                                fontSize: "14px",
                            }}
                        >
                            Nice to see you, Mark Johnson!
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p
                            className="mb-0"
                            style={{ fontSize: "12px" }}
                        >
                            Turn on your car
                        </p>
                        <ArrowRight />
                    </div>
                </div>
                <div className="carInfo">
                    <p
                        style={{
                            fontSize: "18px",
                            marginBottom: "6px",
                        }}
                    >
                        Car Informations
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        Hello, Mark Johnson! Your Car is ready.
                    </p>
                    <div className="data">
                        <div className="d-flex flex-column align-items-center">
                            <CarInfoCircle />
                            <h3 style={{ fontSize: "18px" }}>
                                0h 58 min
                            </h3>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                }}
                            >
                                Time to full charge
                            </p>
                        </div>
                        <div className="info">
                            <div className="info-card">
                                <div>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            marginBottom: "3px",
                                            marginBottom: "3px",
                                        }}
                                    >
                                        Battery Health
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "bold",
                                            margin: "0",
                                        }}
                                    >
                                        76%
                                    </p>
                                </div>
                                <div
                                    style={{
                                        padding: "15px",
                                        borderRadius: "12px",
                                        backgroundColor: "#0075FF",
                                    }}
                                >
                                    <ElectricCarIcon />
                                </div>
                            </div>
                            <div className="info-card">
                                <div>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            marginBottom: "3px",
                                            marginBottom: "3px",
                                        }}
                                    >
                                        Efficiency
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "bold",
                                            margin: "0",
                                        }}
                                    >
                                        20%
                                    </p>
                                </div>
                                <div
                                    style={{
                                        width: "100px",
                                        height: "50px",
                                    }}
                                >
                                    <CarInfoChart color={"#01B574"} />
                                </div>
                            </div>
                            <div className="info-card">
                                <div>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            marginBottom: "3px",
                                            marginBottom: "3px",
                                        }}
                                    >
                                        Consumption
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "bold",
                                            margin: "0",
                                        }}
                                    >
                                        163W/km
                                    </p>
                                </div>
                                <div
                                    style={{
                                        padding: "15px",
                                        borderRadius: "12px",
                                        backgroundColor: "#0075FF",
                                    }}
                                >
                                    <BoltIcon
                                        sx={{ fontSize: "40px" }}
                                    />
                                </div>
                            </div>
                            <div className="info-card">
                                <div>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            marginBottom: "3px",
                                            marginBottom: "3px",
                                        }}
                                    >
                                        This Week
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "bold",
                                            margin: "0",
                                        }}
                                    >
                                        1.342km
                                    </p>
                                </div>
                                <div
                                    style={{
                                        width: "100px",
                                        height: "50px",
                                    }}
                                >
                                    <CarInfoChart color={"#0075FF"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-info">
                    <p
                        className="fw-bold"
                        style={{
                            fontSize: "18px",
                            marginBottom: "0",
                        }}
                    >
                        Profile Informations
                    </p>
                    <p
                        style={{
                            marginTop: "14px",
                            marginBottom: "15px",
                            fontSize: "14px",
                            color: "gray",
                        }}
                    >
                        Hi, I’m Mark Johnson, Decisions: If you can’t
                        decide, the answer is no. If two equally
                        difficult paths, choose the one more painful
                        in the short term (pain avoidance is creating
                        an illusion of equality).
                    </p>
                    <hr className="w-75 m-auto mb-5" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                }}
                            >
                                Full Name
                            </span>{" "}
                            {""}: <span>Mark Johnson</span>
                        </div>
                        <div>
                            <span
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                }}
                            >
                                Mobile
                            </span>{" "}
                            {""}: <span>(44) 123 1234 123</span>
                        </div>
                        <div>
                            <span
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                }}
                            >
                                Email
                            </span>{" "}
                            {""}: <span>mark@simmmple.com</span>
                        </div>
                        <div>
                            <span
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                }}
                            >
                                Location
                            </span>{" "}
                            {""}: <span>United States</span>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <span
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                }}
                            >
                                Social Media:
                            </span>{" "}
                            {""}:{" "}
                            <span
                                style={{
                                    gap: "20px",
                                    display: "flex",
                                }}
                            >
                                <FacebookRoundedIcon
                                    sx={{ fontSize: "20px" }}
                                />{" "}
                                <TwitterIcon
                                    sx={{ fontSize: "20px" }}
                                />{" "}
                                <InstagramIcon
                                    sx={{ fontSize: "20px" }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="platforms-projects">
                <div className="platforms">
                    <p
                        style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "27px",
                        }}
                    >
                        Platform Settings
                    </p>
                    <div style={{ marginBottom: "41px" }}>
                        <p
                            style={{
                                color: "gray",
                                fontSize: "10px",
                                marginBottom: "20px",
                            }}
                        >
                            ACCOUNT
                        </p>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <Switch
                                {...label}
                                defaultChecked
                                sx={{
                                    "& .MuiSwitch-switchBase": {
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    },
                                    "& + .MuiSwitch-track": {
                                        color: "#0075FF",
                                        height: "20px",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                    margin: "0",
                                }}
                            >
                                Email me when someone follows me
                            </p>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <Switch
                                {...label}
                                sx={{
                                    "& .MuiSwitch-switchBase": {
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    },
                                    "& + .MuiSwitch-track": {
                                        color: "#0075FF",
                                        height: "20px",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                    margin: "0",
                                }}
                            >
                                Email me when someone answers to...
                            </p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <Switch
                                {...label}
                                defaultChecked
                                sx={{
                                    "& .MuiSwitch-switchBase": {
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    },
                                    "& + .MuiSwitch-track": {
                                        color: "#0075FF",
                                        height: "20px",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                    margin: "0",
                                }}
                            >
                                Email me when someone mentions me
                            </p>
                        </div>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: "10px",
                                color: "gray",
                            }}
                        >
                            APPLICATION
                        </p>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <Switch
                                {...label}
                                sx={{
                                    "& .MuiSwitch-switchBase": {
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    },
                                    "& + .MuiSwitch-track": {
                                        color: "#0075FF",
                                        height: "20px",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                    margin: "0",
                                }}
                            >
                                New launches and projects
                            </p>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <Switch
                                {...label}
                                sx={{
                                    "& .MuiSwitch-switchBase": {
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    },
                                    "& + .MuiSwitch-track": {
                                        color: "#0075FF",
                                        height: "20px",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                    margin: "0",
                                }}
                            >
                                Monthly product updates
                            </p>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <Switch
                                {...label}
                                defaultChecked
                                sx={{
                                    "& .MuiSwitch-switchBase": {
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    },
                                    "& + .MuiSwitch-track": {
                                        color: "#0075FF",
                                        height: "20px",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                    margin: "0",
                                }}
                            >
                                Subscribe to newsletter
                            </p>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <Switch
                                {...label}
                                defaultChecked
                                sx={{
                                    "& .MuiSwitch-switchBase": {
                                        color: "red",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    },
                                    "& + .MuiSwitch-track": {
                                        color: "#0075FF",
                                        height: "20px",
                                    },
                                }}
                            />
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "gray",
                                    margin: "0",
                                }}
                            >
                                Receive mails weekly
                            </p>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <p
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginBottom: "6px",
                        }}
                    >
                        Projects
                    </p>
                    <p
                        style={{
                            color: "gray",
                            fontSize: "14px",
                            marginBottom: "24px",
                        }}
                    >
                        Architects design houses
                    </p>
                    <div className="project-cards">
                        <div className="project-card">
                            <img
                                src={"/unsplash1.png"}
                                style={{ marginBottom: "20px" }}
                                className="img-fluid"
                            />
                            <p
                                style={{
                                    fontSize: "10px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                Project #1
                            </p>
                            <p
                                className="fw-bold"
                                style={{
                                    fontSize: "18px",
                                    marginBottom: "7.5px",
                                }}
                            >
                                Modern
                            </p>
                            <p
                                style={{
                                    color: "gray",
                                    fontSize: "14px",
                                }}
                            >
                                As Uber works through a huge amount of
                                internal management turmoil.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    color="white"
                                    sx={{
                                        borderRadius: "12px",
                                        padding: "10px 31.5px",
                                    }}
                                >
                                    VIEW ALL
                                </Button>
                                <AvatarGroup
                                    sx={{
                                        "& .MuiAvatar-root": {
                                            border: "none",
                                        },
                                    }}
                                >
                                    <Avatar
                                        src="/avatars/avatar1.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar2.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar3.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar4.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                </AvatarGroup>
                            </div>
                        </div>
                        <div className="project-card">
                            <img
                                src={"/unsplash2.png"}
                                style={{ marginBottom: "20px" }}
                                className="img-fluid"
                            />
                            <p
                                style={{
                                    fontSize: "10px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                Project #2
                            </p>
                            <p
                                className="fw-bold"
                                style={{
                                    fontSize: "18px",
                                    marginBottom: "7.5px",
                                }}
                            >
                                Scandinavian
                            </p>
                            <p
                                style={{
                                    color: "gray",
                                    fontSize: "14px",
                                }}
                            >
                                Music is something that every person
                                has his or her own specific opinion
                                about.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    color="white"
                                    sx={{
                                        borderRadius: "12px",
                                        padding: "10px 31.5px",
                                    }}
                                >
                                    VIEW ALL
                                </Button>
                                <AvatarGroup
                                    sx={{
                                        "& .MuiAvatar-root": {
                                            border: "none",
                                        },
                                    }}
                                >
                                    <Avatar
                                        src="/avatars/avatar1.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar2.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar3.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar4.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                </AvatarGroup>
                            </div>
                        </div>
                        <div className="project-card">
                            <img
                                src={"/unsplash3.png"}
                                style={{ marginBottom: "20px" }}
                                className="img-fluid"
                            />
                            <p
                                style={{
                                    fontSize: "10px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                Project #3
                            </p>
                            <p
                                className="fw-bold"
                                style={{
                                    fontSize: "18px",
                                    marginBottom: "7.5px",
                                }}
                            >
                                Minimalist
                            </p>
                            <p
                                style={{
                                    color: "gray",
                                    fontSize: "14px",
                                }}
                            >
                                Different people have different taste,
                                and various types of music.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    color="white"
                                    sx={{
                                        borderRadius: "12px",
                                        padding: "10px 31.5px",
                                    }}
                                >
                                    VIEW ALL
                                </Button>
                                <AvatarGroup
                                    sx={{
                                        "& .MuiAvatar-root": {
                                            border: "none",
                                        },
                                    }}
                                >
                                    <Avatar
                                        src="/avatars/avatar1.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar2.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar3.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <Avatar
                                        src="/avatars/avatar4.png"
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                </AvatarGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
