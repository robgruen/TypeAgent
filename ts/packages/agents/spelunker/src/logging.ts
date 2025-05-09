// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import path from "path";
import { fileURLToPath } from "url";

let epoch: number = 0;

export function resetEpoch(): void {
    epoch = 0;
}

export function console_log(...rest: any[]): void {
    if (!epoch) {
        epoch = Date.now();
        console.log(""); // Start new epoch with a blank line
    }
    const t = Date.now();
    console.log(((t - epoch) / 1000).toFixed(3).padStart(6), ...rest);
}

// Not really related to logging, but it needs a home...

export function getDirName(): string {
    const __filename = fileURLToPath(import.meta.url);
    return path.dirname(__filename);
}
