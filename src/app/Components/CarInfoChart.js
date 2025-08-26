"use client";

import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";

const data = [
    {
        name: "Jan",
        Mobileapps: 100,
    },
    {
        name: "Feb",
        Mobileapps: 250,
    },
    {
        name: "Mar",
        Mobileapps: 300,
    },
    {
        name: "Apr",
        Mobileapps: 220,
    },
    {
        name: "May",
        Mobileapps: 500,
    },
    {
        name: "Jun",
        Mobileapps: 250,
    },
    {
        name: "Jul",
        Mobileapps: 300,
    },
    {
        name: "Aug",
        Mobileapps: 230,
    },
    {
        name: "Sep",
        Mobileapps: 300,
    },
    {
        name: "Oct",
        Mobileapps: 350,
    },
    {
        name: "Nov",
        Mobileapps: 250,
    },
    {
        name: "Dec",
        Mobileapps: 400,
    },
];

export default function CarInfoChart({ color }) {
    const CustomToolTip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            let data = payload[0];

            return (
                <>
                    <div style={{ marginTop: "-20px" }}>
                        <p
                            style={{
                                margin: 0,
                                color: "#ddd",
                                backgroundColor: "black",
                                padding: "5px",
                            }}
                            className="tooltipcontent1"
                        >
                            {label}
                        </p>
                        <div
                            style={{
                                backgroundColor: "rgba(0,0,0,0.2)",
                                padding: "0 5px",
                                color: "#ddd",
                            }}
                        >
                            <p style={{ width: "140px" }}>
                                {data.name} : {data.value}
                            </p>
                        </div>
                    </div>
                </>
            );
        }
    };

    return (
        <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={data}>
                <Tooltip content={CustomToolTip} />
                <XAxis dataKey={"name"} hide />
                <Line
                    type="monotone"
                    dataKey="Mobileapps"
                    stroke={color}
                    strokeWidth={3.5}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
