import TimeManagement from "@/components/dashboard/Admin/Times/TimeManagement";
import TimesList from "@/components/dashboard/Admin/Times/TimesList";
import React from "react";

function page() {
	return (
		<section className="w-[98%] mx-auto flex justify-between items-start flex-col-reverse md:flex-row-reverse gap-10">
			<div className="w-full">
				{/* the problem is here */}
				<TimesList />
			</div>
			<TimeManagement />
		</section>
	);
}

export default page;
