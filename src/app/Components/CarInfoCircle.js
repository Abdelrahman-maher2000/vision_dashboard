import BoltIcon from "@mui/icons-material/Bolt";

export default function CarInfoCircle() {
    const width = 200;
    const dashArray = 2 * 85.5 * Math.PI;
    const dashOffset = dashArray - (dashArray * 68) / 100;
    return (
        <>
            <div className="car-progress">
                <svg
                    width={width}
                    height={width}
                    viewBox={`0 0 ${width} ${width}`}
                >
                    <defs>
                        <linearGradient id="gradient1">
                            <stop
                                offset={"40%"}
                                stopColor="#05CD99"
                            />
                            <stop
                                offset={"100%"}
                                stopColor="transparent"
                            />
                        </linearGradient>
                    </defs>
                    <circle
                        cx={width / 2}
                        cy={width / 2}
                        r={"85.5"}
                        className="circle"
                    />
                    <circle
                        cx={width / 2}
                        cy={width / 2}
                        r={"85.5"}
                        className="circle-progress"
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }}
                        stroke="url(#gradient1)"
                        transform={`rotate(77 ${width / 2} ${
                            width / 2
                        })`}
                    />
                </svg>
                <div className="text">
                    <BoltIcon
                        sx={{ color: "#09AD8F", fontSize: "30px" }}
                    />
                    <h1 style={{ fontSize: "36px" }}>68%</h1>
                    <p style={{ fontSize: "12px", color: "gray" }}>
                        Current load
                    </p>
                </div>
            </div>
        </>
    );
}
