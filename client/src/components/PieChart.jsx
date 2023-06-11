import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data, classNameID }) {
  return <Pie data={data} className={`graphic ${classNameID}`} />;
}
