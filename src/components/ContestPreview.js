import React from 'react'

const ContestPreview = ({contest}) => {
    return(
        <div className="card">
             <div className="card-header">
                {contest.categoryName}
            </div>
                <div className="card-block">
                    <h4 className="card-title">{contest.contestName}</h4>
                    <p className="card-text">Some test description for this contest.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days to go
                </div>
        </div>
    )
}

export default ContestPreview;