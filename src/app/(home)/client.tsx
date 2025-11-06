"use client";

import { trpc } from "@/trpc/client";

export const   PageClient = () => {

    const [data] = trpc.hello.useSuspenseQuery({
         text : "Varun joshi"
    });

return (

    <div>
        Page client says : { data.greeting }
    </div>
)
}