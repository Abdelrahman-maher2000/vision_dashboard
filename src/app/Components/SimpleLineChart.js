"use client";

import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Jan",
        Moblieapps: 500,
        Websites: 200,
    },
    {
        name: "Feb",
        Moblieapps: 250,
        Websites: 230,
    },
    {
        name: "Mar",
        Moblieapps: 300,
        Websites: 300,
    },
    {
        name: "Apr",
        Moblieapps: 220,
        Websites: 350,
    },
    {
        name: "May",
        Moblieapps: 500,
        Websites: 370,
    },
    {
        name: "Jun",
        Moblieapps: 250,
        Websites: 420,
    },
    {
        name: "Jul",
        Moblieapps: 300,
        Websites: 550,
    },
    {
        name: "Aug",
        Moblieapps: 230,
        Websites: 350,
    },
    {
        name: "Sep",
        Moblieapps: 300,
        Websites: 400,
    },
    {
        name: "Oct",
        Moblieapps: 350,
        Websites: 500,
    },
    {
        name: "Nov",
        Moblieapps: 250,
        Websites: 330,
    },
    {
        name: "Dec",
        Moblieapps: 400,
        Websites: 550,
    },
];

export default function SimpleLineChart() {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            const data2 = payload[1];

            return (
                <>
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
                            color: "#ddd",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            padding: "5px",
                        }}
                        className="tooltipcontent2"
                    >
                        <div className="mob">
                            <div className="dot"></div>
                            <p style={{ margin: 0 }}>
                                {data.name}: {data.value}
                            </p>
                        </div>
                        <div className="web">
                            <div className="dot"></div>
                            <p style={{ margin: 0 }}>
                                {data2.name}: {data2.value}
                            </p>
                        </div>
                    </div>
                </>
            );
        }
    };

    return (
        <ResponsiveContainer
            width={"99%"}
            height={250}
            style={{ position: "relative" }}
        >
            <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient
                        id="colorweb"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="5%"
                            stopColor="#2CD9FF"
                            stopOpacity={0.36}
                        />
                        <stop
                            offset="95%"
                            stopColor="#2CD9FF"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient
                        id="colormob"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="5%"
                            stopColor="#0075FF"
                            stopOpacity={1}
                        />
                        <stop
                            offset="95%"
                            stopColor="#0075FF"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    tick={{
                        fill: "#ddd",
                        fontSize: "10px",
                    }}
                    tickLine={false}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#ddd", fontSize: "10px" }}
                />
                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#ccc"
                    vertical={false}
                />
                <Tooltip content={CustomTooltip} />
                <Area
                    type="monotone"
                    dataKey="Moblieapps"
                    stroke="#0075FF"
                    fillOpacity={1}
                    fill="url(#colormob)"
                    strokeWidth={4}
                />
                <Area
                    type="monotone"
                    dataKey="Websites"
                    stroke="#2CD9FF"
                    fillOpacity={1}
                    fill="url(#colorweb)"
                    strokeWidth={4}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
