import React from "react";

interface ErrorLoadingProps {
    er: string;
}

export function ErrorLoading({ er }: ErrorLoadingProps) {
    return <p className="text-center text-red-600">{er}</p>;
}
