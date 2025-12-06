"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
    categoryId?: string;
}

export const CatgoriesSection = ({ categoryId }: CategoriesSectionProps) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ErrorBoundary fallback={<p>Error...</p>}>
                <CatgoriesSectionSuspense categoryId={categoryId} />
            </ErrorBoundary>
        </Suspense>
    )

}

const CatgoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
    const [categories] = trpc.categories.getMany.useSuspenseQuery();
    return (
        <div>
            {JSON.stringify(categories)}
        </div>
    )


}