import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Na sua opinião, os professores são tolerantes com imprevistos que impossibilitem a realização de atividades? */

const GonzeGeral= () => {
    return (
        <div className="gContainer" id="g11Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Sim', 'Não', 'Não responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [892, 491, 184],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={290}
                width={100}
                options={{
                    maintainAspectRatio: false,
                    layout: {
                        padding: 60,
                    },

                    legend: {
                        display: false,
        /*                         labels: {
                            fontSize: 15,
                            fontColor: "#e6e7ea",
                            fontFamily: 'Roboto',
                        },
        */
                    },

                    title: {
                        display: true,
                        padding: 20,
                        text: "Professores são tolerantes?",
                        fontSize: 25,
                        fontColor: "#e6e7ea",
                        fontFamily: 'Roboto',
                    },

                    scales: {
                        yAxes:[
                            {
                                barPercentage: 1,

                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                },

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#e6e7ea",
                                    fontFamily: 'Roboto',
                                },

                                barThickness: 23,
                            },
                        ],

                        xAxes:[
                            {
                                display: false,
                                gridLines: {
                                    color: "rgba(0,0,0,0)",
                                },
                            }
                        ],
                    },
                }}
            />
        </div>
    );
};

export default GonzeGeral;