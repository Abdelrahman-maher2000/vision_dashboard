"use client";

import {
    Avatar,
    AvatarGroup,
    Box,
    colors,
    Container,
    Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function ProjectTable() {
    const columns = [
        {
            field: "companies",
            headerName: "COMPANIES",
            flex: 2,
            renderCell: (params) => {
                return (
                    <div
                        className="d-flex gap-4"
                        style={{ alignItems: "center" }}
                    >
                        {
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: `${params.row.bgcolor}`,
                                    color: `${params.row.color}`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "10px",
                                    fontWeight: "bold",
                                    margin: "0",
                                }}
                            >
                                {params.row.lable || (
                                    <img src={params.row.src} />
                                )}
                            </div>
                        }
                        <p
                            className="fw-bold mb-0 "
                            style={{ fontSize: "18px" }}
                        >
                            {params.row.companies}
                        </p>
                    </div>
                );
            },
        },
        {
            field: "members",
            headerName: "MEMBERS",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <AvatarGroup
                            className="mb-0 mt-4"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "& .MuiAvatar-root": {
                                    border: "none",
                                },
                            }}
                        >
                            {params.row.avatars.map((e) => {
                                return (
                                    <Avatar
                                        src={e}
                                        sx={{
                                            width: 20,
                                            height: 20,
                                        }}
                                    />
                                );
                            })}
                        </AvatarGroup>
                    </div>
                );
            },
        },
        {
            field: "budget",
            headerName: "BUDGET",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="fw-bold fs-6">
                            {params.row.budget}
                        </p>
                    </div>
                );
            },
        },
        {
            field: "completion",
            headerName: "COMPLETION",
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                gap: "10px",
                                marginTop: "10px",
                            }}
                        >
                            <p
                                className="mb-0"
                                style={{
                                    height: "fit-content",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "start",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    height: "10px",
                                }}
                            >
                                {params.row.completion}%
                            </p>
                            <div
                                className="progress"
                                style={{
                                    width: "100%",
                                    height: "5px",
                                    overflow: "visible",
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#2D2E5F",
                                }}
                            >
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${params.row.completion}%`,
                                        height: "8px",
                                        borderRadius: "5px",
                                        backgroundColor: "#0075FF",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </>
                );
            },
        },
    ];

    const rows = [
        {
            id: 1,
            lable: "Xd",
            companies: "Chakra Soft UI Version",
            avatars: [
                "/avatars/avatar1.png",
                "/avatars/avatar2.png",
                "/avatars/avatar3.png",
                "/avatars/avatar4.png",
                "/avatars/avatar5.png",
            ],
            budget: "$14,000",
            completion: 60,
            color: "#FF61F6",
            bgcolor: "#470137",
        },
        {
            id: 2,
            src: "/icons/icon1.png",
            companies: "Add Progress Track",
            avatars: ["/avatars/avatar1.png", "/avatars/avatar2.png"],
            budget: "$3000",
            completion: 10,
            color: "none",
            bgcolor: "none",
        },
        {
            id: 3,
            src: "/icons/icon2.png",
            companies: "Fix Platform Errors",
            avatars: ["/avatars/avatar1.png", "/avatars/avatar2.png"],
            budget: "Not set",
            completion: 100,
            color: "none",
            bgcolor: "none",
        },
        {
            id: 4,
            src: "/icons/icon3.png",
            companies: "Launch our Mobile App",
            avatars: [
                "/avatars/avatar1.png",
                "/avatars/avatar2.png",
                "/avatars/avatar3.png",
                "/avatars/avatar4.png",
            ],
            budget: "32,000",
            completion: 100,
            color: "none",
            bgcolor: "none",
        },
        {
            id: 5,
            src: "/icons/icon4.png",
            companies: "Add the New Pricing Page",
            avatars: [
                "/avatars/avatar1.png",
                "/avatars/avatar2.png",
                "/avatars/avatar3.png",
                "/avatars/avatar4.png",
                "/avatars/avatar5.png",
            ],
            budget: "$400",
            completion: 25,
            color: "none",
            bgcolor: "none",
        },
        {
            id: 6,
            src: "/icons/icon5.png",
            companies: "Redesign New Online Shop",
            avatars: ["/avatars/avatar1.png", "/avatars/avatar2.png"],
            budget: "$7,600",
            completion: 40,
            color: "none",
            bgcolor: "none",
        },
    ];
    return (
        <>
            <Box
                sx={{
                    height: "380px",
                }}
                className={"project-table"}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    sx={{
                        backgroundColor: "transparent", // شفافية الجدول نفسه
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "transparent", // الهيدر شفاف
                            border: "0",
                        },
                        "& .MuiDataGrid-cell": {
                            backgroundColor: "transparent", // الخلايا شفافة
                            height: "45px",
                            border: "0",
                        },
                        "& .MuiDataGrid-row": {
                            backgroundColor: "transparent", // الصفوف شفافة
                            border: "0",
                            maxHeight: "45px",
                        },
                        color: "white",
                        border: "none",
                    }}
                    hideFooter
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    );
}
