"use client";

import { useState, useRef } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface VideoFrameProps {
  src: string;
  poster: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
}

export default function VideoFrame({ 
  src, 
  poster, 
  title,
  className,
  autoPlay = false 
}: VideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={clsx("relative rounded-2xl overflow-hidden aspect-video group", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={isPlaying}
        autoPlay={autoPlay}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        title={title}
      />
      
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors"
          aria-label="Play video"
        >
          <div className="w-20 h-20 rounded-full bg-brand-teal/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <PlayIcon className="w-10 h-10 text-white ml-1" />
          </div>
        </button>
      )}
    </div>
  );
}
