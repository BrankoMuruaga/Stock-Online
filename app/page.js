import { Suspense } from "react";
import TableItems from "./ui/components/TableItems";
import ListSkeleton from "./ui/loaders/ListSkeleton";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Suspense
          fallback={
            <ListSkeleton className="flex justify-center items-center" />
          }
        >
          <TableItems />
        </Suspense>
      </main>
    </div>
  );
}
