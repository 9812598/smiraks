import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function CatalogPagination({ meta }: any) {
  const currentPage = meta.pagination.page;
  const totalPages = meta.pagination.pageCount;

  console.log(meta, "meta");
  return (
    <Pagination className="mb-28">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            isActive={currentPage > 1}
            className={currentPage > 1 ? "" : "hidden"}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{meta.pagination.page}</PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem aria-disabled={true}>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            className={currentPage < totalPages ? "" : "hidden"}
            // isActive={currentPage < totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
