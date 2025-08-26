// icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Transactions({ dir, app, date, price }) {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <div
                        style={{
                            padding: "9px",
                            borderRadius: "50%",
                            border:
                                dir == "down"
                                    ? "1px solid red"
                                    : "1px solid green",
                        }}
                    >
                        {dir == "down" ? (
                            <ArrowDownwardIcon
                                sx={{ color: "red" }}
                            />
                        ) : (
                            <ArrowUpwardIcon
                                sx={{ color: "green" }}
                            />
                        )}
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: "14px",
                                marginBottom: "4px",
                            }}
                            className="fw-bold"
                        >
                            {app}
                        </p>
                        <p
                            style={{
                                color: "gray",
                                fontSize: "14px",
                                margin: "0",
                            }}
                        >
                            {date}
                        </p>
                    </div>
                </div>
                <p
                    className="mb-0"
                    style={{ color: dir == "down" ? "red" : "green" }}
                >
                    {price}
                </p>
            </div>
        </>
    );
}
