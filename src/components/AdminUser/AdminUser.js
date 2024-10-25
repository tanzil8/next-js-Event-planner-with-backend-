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

  import Image from 'next/image'
  
  const invoices = [
    {
      profileImg : 'https://media.istockphoto.com/id/2154918023/photo/studio-portrait-of-a-man-holding-hat-in-silhouette.webp?a=1&b=1&s=612x612&w=0&k=20&c=QIXDWIGbR2k55kGngvwva96IvGzpQoH9WC1jjVwTfgc=',
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
            <TableHead className="">Profile Img</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="">Pasword</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow  key={invoice.email}>
              <TableCell ><Image src={invoice.profileImg} width={130} height={130} className="rounded-2xl" alt="Profile img"/>            </TableCell>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.role}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className="">{invoice.pasword}</TableCell>
            </TableRow>
          ))}
        </TableBody>      
      
      </Table>
    )
  }
  