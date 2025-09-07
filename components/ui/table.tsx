import React from "react";

export function Table({ children, className }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <table className={`w-full caption-bottom text-sm ${className ?? ""}`}>
      {children}
    </table>
  );
}

export function TableCaption({ children, className }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption className={`mt-4 text-muted-foreground ${className ?? ""}`}>
      {children}
    </caption>
  );
}

export function TableHeader({ children, className }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={`${className ?? ""}`}>
      {children}
    </thead>
  );
}

export function TableFooter({ children, className }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot className={`${className ?? ""}`}>
      {children}
    </tfoot>
  );
}

export function TableBody({ children, className }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={`${className ?? ""}`}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className ?? ""}`}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHead({ children, className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className ?? ""}`}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className ?? ""}`} {...props}>
      {children}
    </td>
  );
}
