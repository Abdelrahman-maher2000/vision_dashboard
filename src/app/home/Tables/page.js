"use client";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

// icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProjectTable from "@/app/Components/ProjectTable";

export default function Tables() {
    const columns1 = [
        {
            field: "author",
            headerName: "AUTHOR",
            flex: 2,
            headerClassName: "header1",
            renderCell: (params) => {
                return (
                    <>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                gap: "15px",
                            }}
                        >
                            <img
                                src={params.row.src}
                                className="img-fluid"
                            />
                            <div className="d-flex flex-column">
                                <p
                                    style={{
                                        // color: "white",
                                        fontSize: "14px",
                                        margin: "0",
                                        height: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start",
                                        color: "white",
                                    }}
                                >
                                    {params.row.name}
                                </p>
                                <p
                                    style={{
                                        color: "gray",
                                        fontSize: "14px",
                                        margin: 0,
                                        height: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start",
                                    }}
                                >
                                    {params.row.email}
                                </p>
                            </div>
                        </div>
                    </>
                );
            },
        },
        {
            field: "function",
            headerName: "FUNCTION",
            flex: 1,
            headerClassName: "header1",
            renderCell: (parmas) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginTop: "15px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "14px",
                                margin: "0",
                                height: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                color: "white",
                            }}
                        >
                            {parmas.row.position1}
                        </p>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "gray",
                                margin: "0",
                                height: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {parmas.row.position2}
                        </p>
                    </div>
                );
            },
        },
        {
            field: "status",
            headerName: "STATUS",
            flex: 1,
            headerClassName: "header1",
            renderCell: (params) => {
                return (
                    <>
                        <div
                            className="d-flex align-items-center"
                            style={{
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    color: "white",
                                    backgroundColor: `${params.row.bgcolor}`,
                                    fontSize: "14px",
                                    padding: "10px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "25px",
                                    border: `${params.row.border}`,
                                }}
                            >
                                {params.row.status}
                            </div>
                        </div>
                    </>
                );
            },
        },
        {
            field: "employed",
            headerName: "EMPLOYED",
            flex: 1,
            headerClassName: "header1",
            renderCell: (params) => {
                return (
                    <p
                        style={{
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        {params.row.employed}
                    </p>
                );
            },
        },
        {
            field: "action",
            headerName: "ACTION",
            flex: 1,
            headerClassName: "header1",
            renderCell: (params) => {
                return (
                    <p
                        style={{
                            fontSize: "14px",
                            color: "gray",
                            textAlign: "center",
                        }}
                    >
                        {params.row.action}
                    </p>
                );
            },
        },
    ];

    const rows1 = [
        {
            id: 1,
            src: "/characters/Char1.png",
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
            position1: "Manager",
            position2: "Organization",
            status: "Online",
            bgcolor: "green",
            employed: "23/04/18",
            border: "none",
            action: "Edit",
        },
        {
            id: 2,
            src: "/characters/Char2.png",
            name: "Alexa Liras",
            email: "alexa@simmmple.com",
            position1: "Programmer",
            position2: "Developer",
            status: "Offline",
            bgcolor: "transparent",
            employed: "11/01/19",
            border: "1px solid white",
            action: "Edit",
        },
        {
            id: 3,
            src: "/characters/Char3.png",
            name: "Laurent Michael",
            email: "laurent@simmmple.com",
            position1: "Executive",
            position2: "Projects",
            status: "Online",
            bgcolor: "green",
            employed: "19/09/17",
            action: "Edit",
        },
        {
            id: 4,
            src: "/characters/Char4.png",
            name: "Freduardo Hill",
            email: "freduardo@simmmple.com",
            position1: "Manager",
            position2: "Organization",
            status: "Online",
            bgcolor: "green",
            employed: "24/12/08",
            action: "Edit",
        },
        {
            id: 5,
            src: "/characters/Char5.png",
            name: "Daniel Thomas",
            email: "daniel@simmmple.com",
            position1: "Programmer",
            position2: "Developer",
            status: "Offline",
            bgcolor: "transparent",
            employed: "04/10/21",
            action: "Edit",
        },
        {
            id: 6,
            src: "/characters/Char6.png",
            name: "Mark Wilson",
            email: "mark@simmmple.com",
            position1: "Designer",
            position2: "UI/UX Design",
            status: "Offline",
            bgcolor: "transparent",
            employed: "14/09/20",
            action: "Edit",
        },
    ];
    return (
        <>
            <Box height={600} width={"100%"} className="table1">
                <h3 className="my-4" style={{ fontSize: "18px" }}>
                    Authors table
                </h3>
                <DataGrid
                    rows={rows1}
                    columns={columns1}
                    hideFooter
                    disableColumnResize={false}
                    columnBufferPx={0}
                    sx={{
                        background: "none",
                        border: "0",
                        overflowX: "auto",
                    }}
                    density="comfortable"
                    disableRowSelectionOnClick
                />
            </Box>
            <div className="mt-5 table2">
                <h3 style={{ fontSize: "18px" }}>Project Table</h3>

                <ProjectTable />
            </div>
        </>
    );
}
