import { Suspense } from "react";
import TableItems from "./ui/components/TableItems";
import {
  InvoiceSkeleton,
  InvoicesTableSkeleton,
} from "./ui/components/skeletons";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col gap-8 items-center">
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <TableItems />
        </Suspense>
      </main>
    </div>
  );
}
