import React from 'react'

export default function Pagination({ clickPrevious, clickNext}) {
    return (
        <nav>
            <ul className="pager">
                <li>
                    {clickPrevious && <span style={{ cursor: "pointer" }} onClick={clickPrevious}>Previous</span>}
                </li>
                <li>
                    {clickNext && <span style={{ cursor: "pointer" }} onClick={clickNext}>Next</span>}
                </li>
            </ul>
        </nav>
    )
}
