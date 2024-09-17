//https://towardsdev.com/chart-js-next-js-beautiful-data-driven-dashboards-how-to-create-them-fast-and-efficiently-a59e313a3153
//import controllers elemets etc 

import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

//register them
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
);

import { Bar, Line, Scatter, Bubble } from  "react-chartjs-2"