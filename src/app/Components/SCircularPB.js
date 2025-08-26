import TagFacesIcon from "@mui/icons-material/TagFaces";

export default function SatsfactionCircularProgressBar() {
    const width2 = 228;
    const rad = 106;
    const dashArray = 2 * Math.PI * rad;
    const dashOffset = dashArray - (dashArray * 80) / 100;
    return (
        <>
            <div className="satsfaction-progress">
                <svg
                    width={width2}
                    height={width2}
                    viewBox={`0 0 ${width2} ${width2}`}
                >
                    <defs>
                        <linearGradient id="gradient2">
                            <stop
                                offset={"20%"}
                                stopColor="#0075FF"
                            />
                            <stop
                                offset={"100%"}
                                stopColor="transparent"
                            />
                        </linearGradient>
                    </defs>
                    <circle
                        cx={width2 / 2}
                        cy={width2 / 2}
                        r={rad}
                        className="circle"
                    />
                    <circle
                        cx={width2 / 2}
                        cy={width2 / 2}
                        r={rad}
                        className="circle-progress"
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }}
                        transform={`rotate(-90 ${width2 / 2} ${
                            width2 / 2
                        })`}
                        stroke="url(#gradient2)"
                    />
                </svg>
                <TagFacesIcon className="icon" />
                <div className="text">
                    <p>0%</p>
                    <div className="d-flex flex-column justify-content-center">
                        <h1>95%</h1>
                        <p>Based on likes</p>
                    </div>
                    <p>100%</p>
                </div>
            </div>
        </>
    );
}
