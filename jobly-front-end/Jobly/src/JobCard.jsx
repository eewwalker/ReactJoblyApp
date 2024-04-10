

function JobCard({ jobData }) {
    return (
        <div className="JobCard card m-2">
            <div className="card-body">
                <h6 className="card-title">{jobData.title}
                    {/* <img src="" alt="" className="float-end ms-5" /> */}
                </h6>
                <p>Salary: {jobData.salary}</p>
                <p>Equity: {jobData.equity}</p>
            </div>

        </div>
    );
}

export default JobCard;