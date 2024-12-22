import { Fade } from "react-awesome-reveal";
import React from "react";

export function DefaultElementAnimation({
    delay,
    className,
    children,
    damping,
    cascade,
}: {
    delay?: number;
    className?: string;
    damping?: number;
    cascade?: boolean;
    children:any;
}) {
    return (
        <Fade
            delay={500 + (delay ?? 0)}
            className={className}
            fraction={0}
            triggerOnce
            damping={damping ?? 0}
            cascade={cascade ?? false}
        >
            {children}
        </Fade>
    );
}
