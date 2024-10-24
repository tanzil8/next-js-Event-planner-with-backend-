import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Tabs defaultValue="account" className="w-full ">
        {/* Navbar styling with Tailwind CSS */}
        <TabsList className="flex bg-gray-100 text-black   " >
          <Link href="/admin/dashboard">
            <TabsTrigger
              value="Dashboard"
              className="px-4 py-2 text-lg hover:bg-gray-700 hover:text-white rounded-md"
            >
              Dashboard
            </TabsTrigger>
          </Link>
          <Link href="/admin/user">
            <TabsTrigger
              value="User"
              className="px-4 py-2 text-lg hover:bg-gray-700 hover:text-white rounded-md"
            >
              User
            </TabsTrigger>
          </Link>
          <Link href="/admin/event">
            <TabsTrigger
              value="Events"
              className="px-4 py-2 text-lg hover:bg-gray-700 hover:text-white rounded-md"
            >
              Events
            </TabsTrigger>
          </Link>
          <Link href="/admin/category">
            <TabsTrigger
              value="Categories"
              className="px-4 py-2 text-lg hover:bg-gray-700 hover:text-white rounded-md"
            >
              Categories
            </TabsTrigger>
          </Link>
          <Link href="/admin/subcategory">
            <TabsTrigger
              value="SubCategories"
              className="px-4 py-2 text-lg hover:bg-gray-700 hover:text-white rounded-md"
            >
              SubCategories
            </TabsTrigger>
          </Link>
        </TabsList>

        {/* Content */}
        <TabsContent value="Dashboard">{children}</TabsContent>
        <TabsContent value="User">{children}</TabsContent>
        <TabsContent value="Events">{children}</TabsContent>
        <TabsContent value="Categories">{children}</TabsContent>
        <TabsContent value="SubCategories">{children}</TabsContent>
      </Tabs>
    </>
  );
};

export default Layout;
