import DashboardNavbar from "@/components/Dashboard/Navbar";
import PollCard from "@/components/Dashboard/PollCard";

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />

      <div className={"grid grid-cols-12"}>
        <div className={"col-start-4 col-span-6"}>
          <div className={"flex gap-4 flex-wrap"}>
            {Array(4).fill(4).map((_, i) => <PollCard key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
