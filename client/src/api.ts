import { HelloResponse } from "@internal/shared-types";

export async function getHelloMessage(): Promise<string> {
    const rsp = await fetch('/test');

    if (!rsp.ok) {
        console.error(await rsp.text());
        throw new Error('Failed to fetch');
    }

    const response: HelloResponse = await rsp.json();

    return response.data;
}