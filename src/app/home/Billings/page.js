"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

// icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BusinessIcon from "@mui/icons-material/Business";
import CreateIcon from "@mui/icons-material/Create";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { styled, Tooltip, tooltipClasses } from "@mui/material";
import Transactions from "@/app/Components/Transaction";

export default function Billings() {
    const data = [
        {
            name: "Page A",

            pv: 450,
        },
        {
            name: "Page B",

            pv: 300,
        },
        {
            name: "Page C",

            pv: 490,
        },
        {
            name: "Page D",

            pv: 350,
        },
        {
            name: "Page E",

            pv: 420,
        },
    ];

    const CustomToolTip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} arrow />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "black",
            color: "white",
            boxShadow: theme.shadows[1],
            fontSize: 15,
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
    }));

    return (
        <>
            <div className="balance">
                <div>
                    <div className="cards">
                        <div className="visa-card ">
                            <div className="d-flex align-items-center justify-content-between">
                                <p
                                    className="mb-0 fw-bold"
                                    style={{ fontSize: "18px" }}
                                >
                                    Vision UI
                                </p>
                                <img src={"/Circles.png"} />
                            </div>
                            <p
                                className="fw-bold"
                                style={{
                                    fontSize: "24px",
                                    marginTop: "70px",
                                }}
                            >
                                7812 2139 0823 XXXX
                            </p>
                            <div className="d-flex algin-items-center gap-5">
                                <div>
                                    <p
                                        style={{ fontSize: "10px" }}
                                        className="mb-0"
                                    >
                                        VALID THRU
                                    </p>
                                    <p
                                        className="fw-bold"
                                        style={{ fontSize: "14px" }}
                                    >
                                        05/24
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{ fontSize: "10px" }}
                                        className="mb-0"
                                    >
                                        CVV
                                    </p>
                                    <p
                                        className="fw-bold"
                                        style={{ fontSize: "14px" }}
                                    >
                                        09X
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="balance-card p-3 ">
                            <div className="balancec">
                                <div className="Credit-Balance">
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            margin: "0",
                                        }}
                                    >
                                        Credit Balance
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "34px",
                                            margin: "0",
                                        }}
                                    >
                                        $25,215
                                    </p>
                                </div>
                                <div
                                    className="chart "
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                    }}
                                >
                                    <MoreHorizIcon />
                                    <div
                                        style={{
                                            width: "100px",
                                            height: "50px",
                                        }}
                                    >
                                        <ResponsiveContainer
                                            width="99%"
                                            height="100%"
                                        >
                                            <LineChart
                                                width={60}
                                                height={20}
                                                data={data}
                                            >
                                                <Line
                                                    type="monotone"
                                                    dataKey="pv"
                                                    stroke="white"
                                                    strokeWidth={2}
                                                    dot={false}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 ">
                                <p
                                    style={{
                                        color: "gray",
                                        fontSize: "10px",
                                    }}
                                >
                                    NEWEST
                                </p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            style={{
                                                backgroundColor:
                                                    "#ace5f5d1",
                                                borderRadius: "50%",
                                                padding: "10px",
                                                width: "fit-content",
                                                height: "fit-content",
                                            }}
                                        >
                                            <BusinessIcon
                                                style={{
                                                    color: "teal",
                                                    fontSize: "30px",
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                style={{
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Bill & Taxes
                                            </h4>
                                            <p
                                                style={{
                                                    color: "gray",
                                                    fontSize: "14px",
                                                    margin: "0",
                                                    fontWeight:
                                                        "bold",
                                                }}
                                            >
                                                Today, 16:36
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                        }}
                                    >
                                        -$154.50
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="payment-method "
                        style={{ marginTop: "25px", padding: "24px" }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-between"
                            style={{ marginBottom: "34px" }}
                        >
                            <p
                                className="fw-bold mb-0"
                                style={{ fontSize: "18px" }}
                            >
                                Payment Method
                            </p>
                            <button className="btn btn-primary rounded-4">
                                Add new Card
                            </button>
                        </div>
                        <div className="info">
                            <div
                                className="border rounded-4 info1"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "23px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "15px",
                                    }}
                                >
                                    <div className="master-card">
                                        <span
                                            style={{
                                                width: "14px",
                                                height: "14px",
                                                borderRadius: "50%",
                                                backgroundColor:
                                                    "#EB001B",
                                                display:
                                                    "inline-block",
                                            }}
                                        ></span>
                                        <span
                                            style={{
                                                display:
                                                    "inline-block",
                                                width: "14px",
                                                height: "14px",
                                                borderRadius: "50%",
                                                backgroundColor:
                                                    "#F79E1B",
                                                marginLeft: "-7.25px",
                                            }}
                                        ></span>
                                    </div>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            margin: "0",
                                        }}
                                    >
                                        7812 2139 0823 XXXX
                                    </p>
                                </div>
                                <CustomToolTip title="Edit Card">
                                    <CreateIcon
                                        sx={{ cursor: "pointer" }}
                                    />
                                </CustomToolTip>
                            </div>
                            <div
                                className="border rounded-4 info2"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "23px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "15px",
                                    }}
                                >
                                    <div className="master-card">
                                        <img
                                            src={
                                                "/icons/VisaIcon.png"
                                            }
                                        />
                                    </div>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            margin: "0",
                                        }}
                                    >
                                        7812 2139 0823 XXXX
                                    </p>
                                </div>
                                <CustomToolTip title="Edit Card">
                                    <CreateIcon
                                        sx={{ cursor: "pointer" }}
                                    />
                                </CustomToolTip>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invoices">
                    <div
                        className="d-flex align-items-cemter justify-content-between"
                        style={{ marginBottom: "27.5px" }}
                    >
                        <p
                            className="mb-0 fw-bold"
                            style={{ fontSize: "18px" }}
                        >
                            Invoices
                        </p>
                        <button
                            className="btn btn-primary rounded-2 p-2"
                            style={{
                                fontSize: "14px",
                            }}
                        >
                            VIEW ALL
                        </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "4px",
                                }}
                            >
                                March, 01, 2020
                            </p>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                #MS-415646
                            </p>
                        </div>
                        <div className="d-flex gap-3">
                            <p className="mb-0 text-secondary fw-bold">
                                $180
                            </p>
                            <div className="d-flex align-items-center gap-1">
                                <DescriptionIcon />
                                <p className="mb-0 text-secondary fw-bold">
                                    PDF
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                        <div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "4px",
                                }}
                            >
                                February, 10, 2021
                            </p>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                #RV-126749
                            </p>
                        </div>
                        <div className="d-flex gap-3">
                            <p className="mb-0 text-secondary fw-bold">
                                $250
                            </p>
                            <div className="d-flex align-items-center gap-1">
                                <DescriptionIcon />
                                <p className="mb-0 text-secondary fw-bold">
                                    PDF
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                        <div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "4px",
                                }}
                            >
                                April, 05, 2020
                            </p>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                #FB-212562
                            </p>
                        </div>
                        <div className="d-flex gap-3">
                            <p className="mb-0 text-secondary fw-bold">
                                $560
                            </p>
                            <div className="d-flex align-items-center gap-1">
                                <DescriptionIcon />
                                <p className="mb-0 text-secondary fw-bold">
                                    PDF
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                        <div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "4px",
                                }}
                            >
                                June, 25, 2019
                            </p>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                #QW-103578
                            </p>
                        </div>
                        <div className="d-flex gap-3">
                            <p className="mb-0 text-secondary fw-bold">
                                $120
                            </p>
                            <div className="d-flex align-items-center gap-1">
                                <DescriptionIcon />
                                <p className="mb-0 text-secondary fw-bold">
                                    PDF
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                        <div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "4px",
                                }}
                            >
                                March, 01, 2019
                            </p>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "gray",
                                    marginBottom: "0",
                                }}
                            >
                                #AR-803481
                            </p>
                        </div>
                        <div className="d-flex gap-3">
                            <p className="mb-0 text-secondary fw-bold">
                                $300
                            </p>
                            <div className="d-flex align-items-center gap-1">
                                <DescriptionIcon />
                                <p className="mb-0 text-secondary fw-bold">
                                    PDF
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{ marginTop: "24px" }}
                className="transactionandinfo"
            >
                <div className="billing-info">
                    <h4>Billing Information</h4>
                    <div className="mt-3 card">
                        <div
                            style={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <p className="mb-0">Oliver Liam</p>
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    style={{
                                        color: "#F53C2B",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <DeleteIcon />
                                    <p className="mb-0">Delete</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <CreateIcon />
                                    <p className="mb-0 text-secondary">
                                        Edit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-secondary ">
                            Company Name: Viking Burrito
                            <p className="mb-0">
                                Email Address: oliver@burrito.com
                            </p>
                            VAT Number: FRB1235476
                        </div>
                    </div>
                    <div className="mt-4 card">
                        <div
                            style={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <p className="mb-0">Oliver Liam</p>
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    style={{
                                        color: "#F53C2B",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <DeleteIcon />
                                    <p className="mb-0">Delete</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <CreateIcon />
                                    <p className="mb-0 text-secondary">
                                        Edit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-secondary ">
                            Company Name: Viking Burrito
                            <p className="mb-0">
                                Email Address: oliver@burrito.com
                            </p>
                            VAT Number: FRB1235476
                        </div>
                    </div>
                    <div className="mt-4 card">
                        <div
                            style={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <p className="mb-0">Oliver Liam</p>
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    style={{
                                        color: "#F53C2B",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <DeleteIcon />
                                    <p className="mb-0">Delete</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <CreateIcon />
                                    <p className="mb-0 text-secondary">
                                        Edit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-secondary ">
                            Company Name: Viking Burrito
                            <p className="mb-0">
                                Email Address: oliver@burrito.com
                            </p>
                            VAT Number: FRB1235476
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="d-flex align-items-center justify-content-between">
                        <p
                            style={{ fontSize: "18px" }}
                            className="mb-0 fw-bold"
                        >
                            Your Transactions
                        </p>
                        <div className="d-flex align-items-center gap-2">
                            <CalendarMonthIcon
                                sx={{ fontSize: "14px" }}
                            />
                            <p
                                style={{
                                    color: "gray",
                                    margin: "0",
                                    fontSize: "14px",
                                }}
                            >
                                23 - 30 March 2020
                            </p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p
                            style={{
                                fontSize: "10px",
                                color: "gray",
                                marginBottom: "17.5px",
                            }}
                        >
                            NEWEST
                        </p>
                        <div className="mt-3 mb-4">
                            <Transactions
                                dir={"down"}
                                price={"-$2500"}
                                app={"Netflix"}
                                date={"27 March 2020, at 12:30 PM"}
                            />
                        </div>
                        <div className="mb-5">
                            <Transactions
                                dir={"up"}
                                price={"+$2500"}
                                app={"Apple"}
                                date={"27 March 2020, at 12:30 PM"}
                            />
                        </div>
                        <p style={{ color: "gray" }}>Yesdterday</p>
                        <div className="mb-4 mt-4">
                            <Transactions
                                dir={"up"}
                                price={"+$800"}
                                app={"Stripe"}
                                date={"26 March 2020, at 13:45 PM"}
                            />
                        </div>
                        <div className="mb-4">
                            <Transactions
                                dir={"up"}
                                price={"+$1700"}
                                app={"HubSpot"}
                                date={"26 March 2020, at 12:30 PM"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
