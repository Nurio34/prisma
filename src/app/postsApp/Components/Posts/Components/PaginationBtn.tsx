import React, { Dispatch, SetStateAction } from "react";

function PaginationBtn({
    index,
    setSkip,
}: {
    index: number;
    setSkip: Dispatch<SetStateAction<number>>;
}) {
    return (
        <li>
            <button
                type="button"
                className="btn btn-sm btn-secondary"
                onClick={() => setSkip(index)}
            >
                {index + 1}
            </button>
        </li>
    );
}

export default PaginationBtn;
