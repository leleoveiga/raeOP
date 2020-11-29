import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Gráfico 1: de Perfil dos Respondentes - Por Curso */

const Gum = () => {
    return (
        <div className="gum">
            <HorizontalBar
                className='graph'
                data = {{
                    labels: [
                        'Direito', 'Eng Civil', 'Ciência da Computação',
                        'Eng Elétrica', 'Geografia', 'Ciências Biológicas',
                        'Nutrição', 'Farmácia', 'Enfermagem', 'Matemática', 'História',
                        'Medicina', 'Design', 'Química', 'Administração',
                        'Eng de Petróleo', 'Arte e Mídia', 'Letras', 'Estatística',
                        'Eng Ambiental', 'Psicologia', 'Eng de Alimentos',
                        'Eng Mecânica', 'Física', 'Filosofia', 'Eng Florestal',
                        'Eng Agrícola', 'Eng Química', 'Eng de Produção',
                        'Pedagogia', 'Ciências Sociais', 'Arquitetura e Urbanismo', 'Agronomia',
                        'Odontologia', 'Meteorologia', 'Medicina Veterinária',
                        'Ciências Econômicas', 'Eng de Minas', 'Eng de Materiais',
                        'Eng de Biotecnologia e Bioprocessos', 'Ciências Contábeis',
                        'Gestão Pública', 'Eng de Biossistemas', 'Comunicação Social'
                    ],

                    datasets: [
                        {
                            label: "Quantidade",
                            data: [
                                138, 128, 114, 112, 99, 92, 90, 82, 73, 71, 66, 63, 53, 46,
                                38, 37, 34, 25, 25, 25, 24, 24, 12, 10, 9, 8, 8, 7, 7, 6, 5,
                                5, 5, 4, 4, 4, 3, 2, 2, 2, 2, 1, 1, 1
                            ],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                    },

                        {
                            label: "Porcentagem",
                            data: [
                                8.81, 8.17, 7.28, 7.15, 6.32, 5.87, 5.74, 5.23, 4.66, 4.53, 4.21, 4.02, 3.38,
                                2.94, 2.43, 2.36, 2.17, 1.6, 1.6, 1.6, 1.53, 1.53, 0.77, 0.64, 0.57, 0.51, 0.51,
                                0.45, 0.45, 0.38, 0.32, 0.32, 0.32, 0.26, 0.26, 0.26, 0.19, 0.13, 0.13, 0.13, 0.13,
                                0.06, 0.06, 0.06
                            ],
                            backgroundColor: '#1DB954',
                            barThickness: 'flex',
                        },
                    ],

            
                }}
                height = {950}
                width = {400}
                options = {{
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
                        padding: 10,
                        text: "Nº de Respondentes",
                        fontSize: 25,
                        fontColor: "#e6e7ea",
                        fontFamily: 'Roboto',
                    },

                    scales: {
                        yAxes:[
                            {
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                },

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 16,
                                    fontColor: "#e6e7ea",
                                    fontFamily: 'Roboto',
                                },

                                barThickness: 10,

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
    )
};

export default Gum;