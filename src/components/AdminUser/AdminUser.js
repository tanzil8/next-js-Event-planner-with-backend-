import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      name: "Tanzil",
      role: "Admin",
      email: "tanzilkhan8028@gmail.com",
      pasword: "1234",
    },
    
  ]
  
  export function AdminUser() {
    return (
      <Table>
       
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Pasword</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.role}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className="text-right">{invoice.pasword}</TableCell>
            </TableRow>
          ))}
        </TableBody> 
      
      </Table>
    )
  }
  