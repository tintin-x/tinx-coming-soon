import { useEffect, useRef } from 'react';
import { TextGenerateEffectDemo } from '../components/TextGenerateEffect';

import bgImage from '../assets/bg.svg';
import { RobotMascot } from '../components/RobotMascot';


const Dashboard = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        if (logo) {
            logo.animate(
                [
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-5px)' },
                    { transform: 'translateY(0)' },
                ],
                {
                    duration: 2000,
                    iterations: Infinity,
                    easing: 'ease-in-out',
                }
            );
        }
    }, []);

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'fill',
                backgroundPosition: 'center',
                width: '100%',
                minHeight: '100vh',
            }}
        >
            <div style={{ marginTop: '-80px' }}>
                <div className="w-20 mb-2 mx-auto flex flex-col items-center">
                    <RobotMascot />
                    <h1
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-2 text-center mt-2 tracking-wider"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            letterSpacing: '0.1em',
                            textShadow: 'rgba(0, 0, 0, 0.85) -5px 6px 3px',
                        }}
                    >
                        TIN
                        <span
                            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-green-500"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                letterSpacing: '0.1em',
                                textShadow: 'rgba(0, 0, 0, 0.85) -5px 6px 3px',
                            }}
                        >
                            T
                        </span>
                        INX
                    </h1>
                </div>
                <TextGenerateEffectDemo />
            </div>
        </div>
    );
};

export default Dashboard;
