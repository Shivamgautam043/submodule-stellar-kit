import { twMerge } from "tailwind-merge";
import React from "react";

export function VerticalSpacer({ className }: { className?: string }) {
    if (className == null) {
        className = "tw-h-8";
    }

    return (
        <div
            className={twMerge("tw-flex-none tw-self-stretch", className)}
        ></div>
    );
}
