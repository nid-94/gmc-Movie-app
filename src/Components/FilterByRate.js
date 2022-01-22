import { Rate } from "antd";
import React from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function FilterByRate({ movieRating, isRating, rating, setRating }) {
    return (
        <div>
            {isRating ? (
                <div>
                    <Rate disabled value={movieRating} />
                </div>
            ) : (
                <div style={{}}>
                    <Rate
                        tooltips={desc}
                        value={rating}
                        onChange={(value) => setRating(value)}
                    />
                </div>
            )}
        </div>
    );
}

export default FilterByRate;
