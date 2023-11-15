"use client";

import DashboardHeader from "../../components/DashboardHeader";
import CreateGoodie from "../../components/Goodie/CreateGoodie";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import Protected from "../../hooks/adminProtected";

type Props = {};

const page = (props: Props) => {
  return (
    <Protected>

    <div>
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CreateGoodie/>
        </div>
      </div>
    </div>
    </Protected>

  );
};


export default page