"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";

const dummy = [
  {
    domain: "fayln",
    tld: "com",
    registar: "porkbun",
    status: "Active",
    tag: "Personal",
    age: "133",
  },
  {
    domain: "ngidol",
    tld: "com",
    registar: "porkbun",
    status: "Active",
    tag: "Personal",
    age: "133",
  },
];

export default function DomainTable() {
  return (
    <div className="pt-6">
      <Table>
        <TableCaption>list of my domain</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-200 dark:bg-muted hover:bg-muted">
            <TableHead>Domain</TableHead>
            <TableHead>Registar</TableHead>
            <TableHead>Tag</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummy.map((dom, i) => {
            const end = dom.domain.length - 2;
            const censorDomain =
              dom.domain.slice(0, 2) +
              "*".repeat(end - 2) +
              dom.domain.slice(end);

            return (
              <TableRow key={i}>
                <TableCell className="font-medium whitespace-nowrap">
                  {censorDomain}.{dom.tld}
                </TableCell>
                <TableCell>{dom.registar}</TableCell>
                <TableCell>{dom.tag}</TableCell>
                <TableCell>{dom.age}d</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
