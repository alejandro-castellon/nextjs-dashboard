import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {

  const query = searchParams?.query || '';
    return (
      <Suspense fallback={<TableRowSkeleton />}>
        <CustomersTable query={query}/>
      </Suspense>
    )
}