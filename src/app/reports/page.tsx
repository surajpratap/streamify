import UsersChart from "@/app/reports/users-chart";
import {getRevenueByStream, getTopSongs, getUsersByMonth} from "@/app/reports/data";
import RevenueChart from "@/app/reports/revenue-chart";
import TopSongs from "@/app/reports/top-songs";

export default async function Reports() {
  const [usersByMonth, revenueByStream, topSongs] = await Promise.all([getUsersByMonth(), getRevenueByStream(), getTopSongs()]);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-white">Reports</h1>
      <div className={'grid md:grid-cols-2 gap-4 mt-4'}>
        <UsersChart data={usersByMonth} />
        <RevenueChart data={revenueByStream} />
        <div className={'md:col-span-2'}>
          <TopSongs data={topSongs} />
        </div>
      </div>
    </div>
  );
}
