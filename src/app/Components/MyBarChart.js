"use client";

import React from "react";
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Apr",
        Sales: 330,
    },
    {
        name: "May",
        Sales: 250,
    },
    {
        name: "Jun",
        Sales: 110,
    },
    {
        name: "jul",
        Sales: 300,
    },
    {
        name: "Aug",
        Sales: 490,
    },
    {
        name: "Sep",
        Sales: 350,
    },
    {
        name: "Oct",
        Sales: 270,
    },
    {
        name: "Nov",
        Sales: 130,
    },
    {
        name: "Dec",
        Sales: 425,
    },
];

const MyBarChart = () => {
    const CustomShape = (props) => {
        const { x, y, width, height, fill } = props;

        const radius = 12;
        return (
            <g>
                <path
                    d={`
        M${x},${y + radius}
        a${radius},${radius} 0 0 1 ${radius},-${radius}
        h${width - radius * 2}
        a${radius},${radius} 0 0 1 ${radius},${radius}
        v${height - radius}
        h-${width}
        Z
      `}
                    fill={fill}
                />
            </g>
        );
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            let name = payload[0].payload.name;

            return (
                <>
                    <div>
                        <p
                            style={{
                                margin: 0,
                                color: "#ddd",
                                backgroundColor: "black",
                                padding: "5px",
                            }}
                            className="tooltipcontent1"
                        >
                            {name}
                        </p>
                        <div
                            className="d-flex align-items-center tooltipcontent2 gap-2"
                            style={{
                                margin: 0,
                                color: "#ddd",
                                backgroundColor: "rgba(0,0,0,0.7)",
                                padding: "5px",
                            }}
                        >
                            <div
                                className="mb-0"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                }}
                            ></div>
                            <p
                                className="mb-0"
                                style={{ fontSize: "20px" }}
                            >
                                {data.name}: {data.value}
                            </p>
                        </div>
                    </div>
                </>
            );
        }
    };

    const CustomCursor = ({ x, y, width, height }) => {
        return (
            <rect
                x={x + width / 2.8}
                width={7}
                y={y}
                height={height}
                fill="gray"
                rx={4}
            />
        );
    };
    return (
        <div style={{ position: "relative" }}>
            <ResponsiveContainer width="99%" height={222}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={false}
                        vertical={false}
                    />

                    <YAxis
                        tickLine={false}
                        tick={{ fill: "white" }}
                        axisLine={false}
                    />
                    <Tooltip
                        // contentStyle={{ color: "black" }}
                        content={CustomTooltip}
                        cursor={<CustomCursor />}
                    />
                    <Bar
                        dataKey="Sales"
                        fill="white"
                        barSize={7}
                        shape={<CustomShape />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyBarChart;
