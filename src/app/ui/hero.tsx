import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center p-4 lg:p-8">
            <div className="hero-content flex flex-col lg:flex-row items-center text-center lg:text-left">
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                    <Image
                        src="/profile-pic.png"
                        className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-lg shadow-2xl"
                        alt="profile image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="lg:ml-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Sabri Yassine</h1>
                    <p className="py-4 sm:py-6 text-base sm:text-lg">
                        I'm Yassine, a dedicated Software Engineering student. I aim to drive positive change through technology and continuous learning. Let's build the future together!
                    </p>
                    <Link href="/ResumeV1.pdf" className="btn btn-primary mt-4 lg:mt-0" download target="_blank">
                        Download CV
                    </Link>
                </div>
            </div>
        </div>
    );
}
