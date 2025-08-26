import MyBarChart from "../Components/MyBarChart";
import SimpleLineChart from "../Components/SimpleLineChart";

// icons
import WalletIcon from "@mui/icons-material/Wallet";
import LanguageIcon from "@mui/icons-material/Language";
import FeedIcon from "@mui/icons-material/Feed";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SatsfactionCircularProgressBar from "../Components/SCircularPB";
import CircularProgressBarReferral from "../Components/RCircularPB";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProjectTable from "../Components/ProjectTable";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import {
    Build,
    RocketLaunch,
    ShoppingCart,
} from "@mui/icons-material";

export default function HomePage() {
    return (
        <>
            <div className="home">
                <div className="calcs">
                    <div className="item">
                        <div>
                            <p>Todays's Money</p>
                            <div className="d-flex align-items-end">
                                <h3 className="mb-0">$53,000</h3>
                                <span
                                    style={{ color: "green" }}
                                    className="fw-bold fs-5 mb-0"
                                >
                                    +55%
                                </span>
                            </div>
                        </div>
                        <div className="icon">
                            <WalletIcon sx={{ fontSize: "30px" }} />
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <p>Todays's User</p>
                            <div className="d-flex align-items-end">
                                <h3 className="mb-0">2,300</h3>
                                <span
                                    style={{ color: "green" }}
                                    className="fw-bold fs-5 mb-0"
                                >
                                    +3%
                                </span>
                            </div>
                        </div>
                        <div className="icon">
                            <LanguageIcon sx={{ fontSize: "30px" }} />
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <p>New clients</p>
                            <div className="d-flex align-items-end">
                                <h3 className="mb-0">3,462</h3>
                                <span
                                    style={{ color: "red" }}
                                    className="fw-bold fs-5 mb-0"
                                >
                                    -2%
                                </span>
                            </div>
                        </div>
                        <div className="icon">
                            <FeedIcon sx={{ fontSize: "30px" }} />
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <p>Total Sales</p>
                            <div className="d-flex align-items-end">
                                <h3 className="mb-0">$103,430</h3>
                                <span
                                    style={{ color: "green" }}
                                    className="fw-bold fs-5 mb-0"
                                >
                                    +5%
                                </span>
                            </div>
                        </div>
                        <div className="icon">
                            <LocalGroceryStoreIcon
                                sx={{ fontSize: "30px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="Progress mt-5">
                    <div className="welcome">
                        <div>
                            <p style={{ color: "gray" }}>
                                Welcome back,
                            </p>
                            <h2>Abdelrahman Maher</h2>
                            <p
                                className="mb-0"
                                style={{
                                    color: "gray",
                                    fontSize: "16px",
                                }}
                            >
                                Glad to see you again!
                            </p>
                            <p
                                style={{
                                    color: "gray",
                                    fontSize: "16px",
                                }}
                            >
                                Ask me any thing
                            </p>
                        </div>
                        <p style={{ cursor: "pointer" }}>
                            Tab to record <ArrowForwardIcon />
                        </p>
                    </div>
                    <div className="Satisfaction">
                        <h4>Satisfaction Rate</h4>
                        <p>From all projects</p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <SatsfactionCircularProgressBar />
                        </div>
                    </div>
                    <div className="Referral">
                        <div className="d-flex justify-content-between align-items-start">
                            <div
                                style={{
                                    flexGrow: "1",
                                }}
                            >
                                <h4>Referral Tracking</h4>
                                <div className="all-info">
                                    <div>
                                        <div
                                            className="info"
                                            style={{
                                                marginTop: "41px",
                                                marginBottom: "21px",
                                            }}
                                        >
                                            <h5
                                                style={{
                                                    color: "gray",
                                                }}
                                            >
                                                Invited
                                            </h5>
                                            <h3>145 people</h3>
                                        </div>
                                        <div
                                            className="info"
                                            style={{
                                                marginTop: "41px",
                                                marginBottom: "21px",
                                            }}
                                        >
                                            <h5
                                                style={{
                                                    color: "gray",
                                                }}
                                            >
                                                Bonus
                                            </h5>
                                            <h3>1,465</h3>
                                        </div>
                                    </div>
                                    <CircularProgressBarReferral />
                                </div>
                            </div>
                            <div
                                className="p-1 rounded"
                                style={{
                                    backgroundColor:
                                        "rgba(10, 14, 35, 0.49)",
                                }}
                            >
                                <MoreHorizIcon color="secondary" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="chart1">
                        <h3 style={{ fontSize: "18px" }}>
                            Sales Overview
                        </h3>
                        <p
                            style={{
                                color: "gray",
                                fontWeight: "bold",
                                marginBottom: "40px",
                            }}
                        >
                            <span style={{ color: "green" }}>
                                (+5) more
                            </span>{" "}
                            in 2025
                        </p>
                        <SimpleLineChart />
                    </div>
                    <div className="chart2">
                        <div className="simple-chart">
                            <MyBarChart />
                        </div>
                        <div style={{ marginTop: "24px" }}>
                            <h3 style={{ fontSize: "18px" }}>
                                Active Users
                            </h3>
                            <p
                                style={{
                                    color: "gray",
                                    fontSize: "14px",
                                }}
                            >
                                <span style={{ color: "green" }}>
                                    (+23)
                                </span>
                                than last week
                            </p>
                        </div>
                        <div
                            style={{
                                marginTop: "34px",
                            }}
                            className="calcs2"
                        >
                            <div className="item">
                                <div className="d-flex gap-2 head">
                                    <div className="icon">
                                        <WalletIcon />
                                    </div>
                                    <h3
                                        style={{
                                            color: "gray",
                                            marginBottom: "0",
                                        }}
                                    >
                                        Users
                                    </h3>
                                </div>
                                <h3
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    32,984
                                </h3>
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{
                                        height: "5px",
                                        backgroundColor: "#2D2E5F",
                                    }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "66%",
                                            backgroundColor:
                                                "#0075FF",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="d-flex gap-2 head">
                                    <div className="icon">
                                        <RocketLaunch />
                                    </div>
                                    <h3
                                        style={{
                                            color: "gray",
                                            marginBottom: "0",
                                        }}
                                    >
                                        Clicks
                                    </h3>
                                </div>
                                <h3
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    2,42M
                                </h3>
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{
                                        height: "5px",
                                        backgroundColor: "#2D2E5F",
                                    }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "85.5%",
                                            backgroundColor:
                                                "#0075FF",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="d-flex gap-2 head">
                                    <div className="icon">
                                        <ShoppingCart />
                                    </div>
                                    <h3
                                        style={{
                                            color: "gray",
                                            marginBottom: "0",
                                        }}
                                    >
                                        Sales
                                    </h3>
                                </div>
                                <h3
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    2,400$
                                </h3>
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{
                                        height: "5px",
                                        backgroundColor: "#2D2E5F",
                                    }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "40%",
                                            backgroundColor:
                                                "#0075FF",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                    className="d-flex gap-2 head"
                                    style={{ alignItems: "center" }}
                                >
                                    <div
                                        className="icon"
                                        style={{
                                            transform:
                                                "rotate(90deg)",
                                        }}
                                    >
                                        <Build />
                                    </div>
                                    <h3
                                        style={{
                                            color: "gray",
                                            marginBottom: "0",
                                        }}
                                    >
                                        Items
                                    </h3>
                                </div>
                                <h3
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    320
                                </h3>
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{
                                        height: "5px",
                                        backgroundColor: "#2D2E5F",
                                    }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "60.5%",
                                            backgroundColor:
                                                "#0075FF",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tableorders">
                    <div
                        className="tables py-5 px-3"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(6, 11, 40,0.75), rgba(10,14,35,0.71))",
                            borderRadius: "20px",
                        }}
                    >
                        <div>
                            <div>
                                <h3 style={{ fontSize: "18px" }}>
                                    Projects
                                </h3>

                                <div
                                    className="d-flex align-items-center gap-2"
                                    style={{ marginBottom: "24px" }}
                                >
                                    <CheckCircleIcon
                                        sx={{ color: "green" }}
                                    />
                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize: "14px",
                                            color: "gray",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        30 done this month
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ProjectTable />
                            </div>
                        </div>
                    </div>
                    <div className="orders">
                        <div>
                            <h3 style={{ fontSize: "18px" }}>
                                Orders overview
                            </h3>
                            <div
                                className="d-flex align-items-center gap-2"
                                style={{ marginBottom: "24px" }}
                            >
                                <CheckCircleIcon
                                    sx={{ color: "green" }}
                                />
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "14px",
                                        color: "gray",
                                        fontWeight: "bold",
                                    }}
                                >
                                    30 done this month
                                </p>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div
                                className="d-flex align-items-start gap-2 "
                                style={{ marginBottom: "24px" }}
                            >
                                <NotificationsIcon
                                    sx={{ color: "#0075FF" }}
                                />
                                <div>
                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        $2400, Design changes
                                    </p>
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "gray",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        22 DEC 7:20 PM
                                    </p>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-start gap-2 mt-4"
                                style={{ marginBottom: "24px" }}
                            >
                                <img
                                    src={"/icons/icon6.png"}
                                    className="img-fluid mt-1"
                                />
                                <div>
                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        New order #4219423
                                    </p>
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "gray",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        21 DEC 11:21 PM
                                    </p>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-start gap-2 mt-4"
                                style={{ marginBottom: "24px" }}
                            >
                                <ShoppingCart
                                    sx={{ color: "blue" }}
                                />
                                <div>
                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Server Payments for April
                                    </p>
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "gray",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        21 DEC 9:28 PM
                                    </p>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-start gap-2 mt-4"
                                style={{ marginBottom: "24px" }}
                            >
                                <CreditCardIcon
                                    sx={{ color: "orange" }}
                                />
                                <div>
                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        New card added for order
                                        #3210145
                                    </p>
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "gray",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        20 DEC 3:52 PM
                                    </p>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-start gap-2 mt-4"
                                style={{ marginBottom: "24px" }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    color="#9f7aea"
                                    height="16px"
                                    width="16px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        color: "rgb(159, 122, 234)",
                                        marginTop: "3px",
                                    }}
                                >
                                    <title></title>
                                    <path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"></path>
                                </svg>
                                <div>
                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Unlock packages for
                                        Development
                                    </p>
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "gray",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        19 DEC 11:35 PM
                                    </p>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-start gap-2 mt-4"
                                style={{ marginBottom: "24px" }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#470137",
                                        width: "20px",
                                        height: "20px",
                                        // padding: "5px",
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "#FF61F6",
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Xd
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        New order #9851258
                                    </p>
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "gray",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        18 DEC 4:41 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
