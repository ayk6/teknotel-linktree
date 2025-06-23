"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 video-bg"
        >
            <source src="/bgvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}