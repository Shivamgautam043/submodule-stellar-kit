import { Fade } from "react-awesome-reveal";
import React from "react";

export function DefaultImageAnimation({
    delay,
    className,
    children,
}: {
    delay?: number;
    className?: string;
    children:any;
}) {
    return (
        <Fade
            delay={100 + (delay ?? 0)}
            className={className}
            fraction={0}
            triggerOnce
        >
            {children}
        </Fade>
    );
}
