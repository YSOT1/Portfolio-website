import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function About(){
    return(
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="./profile-pic.png"
      className="max-w-sm rounded-lg shadow-2xl"
      alt="profile image"
      width="300"
      height="300" />
    <div>
      <h1 className="text-5xl font-bold">Sabri Yassine</h1>
      <p className="py-6">
      I'm Yassine, a dedicated Software Engineering student. I aim to drive positive change through technology and continuous learning. Let's build the future together!
      </p>
      <Link href="./ResumeV1.pdf" className="btn btn-primary mr-3 "download target="_blank" >Download CV</Link>
    </div>
  </div>
</div>
    );
}