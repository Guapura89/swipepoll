const PollCard = () => {
  return (
    <div className={"bg-gray-800 flex-grow p-8 rounded-lg shadow-md"}>
      <p className={"text-gray-500"}>Games</p>
      <h3 className={"text-xl font-bold my-3"}>What game should we play?</h3>
      <div className={"flex"}>
        <div className={"bg-secondary py-1 px-4 rounded-full"}>
          388 votes
        </div>
      </div>
    </div>
  );
}

export default PollCard;
