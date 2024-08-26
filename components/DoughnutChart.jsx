import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,ArcElement, tooltip,Legend} from "chart.js"

ChartJS.register(ArcElement, Tooltip,Legend)

const DoughnutChart = () => {
    return(
        <div>DoughnutChart</div>
    )
}

export default DoughnutChart