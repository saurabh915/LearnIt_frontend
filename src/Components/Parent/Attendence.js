import React, { useState } from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import './Attendence.css';


const Attendence = () => {
    const [attendanceData, setAttendanceData] = useState({
        attendanceByGrade: [85, 90],
        attendanceByDayOfWeek: [80, 85, 90, 87, 83],
        suspensionsByGrade: [5, 3],
    });

    const dataBar = {
        labels: ["11", "12"],
        datasets: [
            {
                label: "Attendance %",
                data: attendanceData.attendanceByGrade,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
            },
        ],
    };

    const dataLine = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
            {
                label: "Attendance %",
                data: attendanceData.attendanceByDayOfWeek,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
            },
        ],
    };

    const dataPie = {
        labels: ["11", "12"],
        datasets: [
            {
                label: "Suspensions",
                data: attendanceData.suspensionsByGrade,
                backgroundColor: ["#3cba9f", "#e84393"],
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className="attendance-dashboard">
            <h1>Attendance Analysis Dashboard</h1>
            <div className="charts">
                <div className="chart">
                    <Bar data={dataBar} options={options} />
                    <h2>Attendance by Grade</h2>
                </div>
                <div className="chart">
                    <Line data={dataLine} options={options} />
                    <h2>Attendance by Day of Week</h2>
                </div>
                <div className="chart">
                    <Pie data={dataPie} />
                    <h2>Suspensions by Grade</h2>
                </div>
            </div>
        </div>
    );
};

export default Attendence;
