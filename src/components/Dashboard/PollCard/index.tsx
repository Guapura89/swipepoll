const PollCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p className={"text-gray-300 font-light"}>Games</p>
        <h2 className="card-header text-xl font-bold">
          What game should we play?
        </h2>
        <div className="card-footer">
          <span className="badge badge-secondary py-1 px-4">388 votes</span>
        </div>
      </div>
    </div>
  )
    ;
};

export default PollCard;
