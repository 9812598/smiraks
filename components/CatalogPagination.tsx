import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function CatalogPagination({ meta }: any) {
  const currentPage = meta.pagination.page;
  const totalPages = meta.pagination.pageCount;

  return (
    <Pagination className="mb-28">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            isActive={false}
            className={currentPage > 1 ? "" : "hidden"}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{meta.pagination.page}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            className={currentPage < totalPages ? "" : "hidden"}
            isActive={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
