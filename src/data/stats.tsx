import { PiGlobeFill } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "10k+",
    icon: <IoFastFood size={34} className="text-blue-500" />,
    description: "Meals provided to youth in our programs — and growing!"
  },
  {
    title: "2",
    icon: <FaMapMarkedAlt size={34} className="text-yellow-500" />,
    description: "Locations in Nashville, TN KIPP Kirkpatrick and Liberty Elementary. More to come!"
  },
  {
    title: "200+",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description: "Youth and volunteers impacted through our programs, outreach, and events."
  }
];
