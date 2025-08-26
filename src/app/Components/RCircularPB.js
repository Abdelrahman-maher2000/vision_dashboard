export default function CircularProgressBarReferral() {
    const width = 220;
    const dashArray = 2 * 85 * Math.PI;
    const dashOffset = dashArray - (dashArray * 80) / 100;
    return (
        <>
            <div className="referral-progress">
                <svg
                    width={width}
                    height={width}
                    viewBox={`0 0 ${width} ${width}`}
                >
                    <defs>
                        <linearGradient id="gradient1">
                            <stop
                                offset={"20%"}
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
                        r={"103"}
                        className="circle"
                    />
                    <circle
                        cx={width / 2}
                        cy={width / 2}
                        r={"103"}
                        className="circle-progress"
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }}
                        stroke="url(#gradient1)"
                        transform={`rotate(-90 ${width / 2} ${
                            width / 2
                        })`}
                    />
                </svg>
                <div className="text">
                    <p>Safety</p>
                    <h1>9.3</h1>
                    <p>Total Score</p>
                </div>
            </div>
        </>
    );
}
