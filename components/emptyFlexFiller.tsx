import {twMerge} from "tailwind-merge";
import React from "react";

export function EmptyFlexFiller({className}: {className?: string}) {
    return (
        <div
            className={twMerge(
                "tw-flex-1",
                className,
            )}
        />
    );
}
