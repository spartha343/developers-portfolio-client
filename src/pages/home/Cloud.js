import TagCloud from '@frank-mayer/react-tag-cloud';
import React from 'react';

const Cloud = () => {
    return (
        <div className='flex justify-center text-secondary font-semibold'>
            <TagCloud
                options={(w) => ({
                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "normal",
                })}
                onClick={(tag, ev) => alert(tag)}
                onClickOptions={{ passive: true }}
            >
                {[
                    "VS Code",
                    "GitHub",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Bootstrap",
                    "Tailwind",
                    "Netlify",
                    "Vercel",
                    "HTML 5",
                    "CSS 3",
                    "API",
                    "Firebase",
                    "JWT",
                ]}
            </TagCloud>
        </div>
    );
};

export default Cloud;