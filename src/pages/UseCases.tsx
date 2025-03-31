
import React from 'react';
import Navbar from '@/components/Navbar';
import { 
  Users, 
  Camera, 
  FileUp, 
  CheckCircle2, 
  Share2, 
  Database 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

const UseCases = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SalesChef for Different Roles
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See how SalesChef transforms product data management for every team member, 
              increasing efficiency and ensuring consistent, high-quality product information.
            </p>
          </div>
        </section>
        
        {/* User Stories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">User Stories</h2>
              <p className="mt-4 text-lg text-gray-600">
                How different team members benefit from SalesChef
              </p>
            </div>
            
            <Tabs defaultValue="product-manager" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid md:grid-cols-6 grid-cols-3 gap-4">
                  <TabsTrigger value="product-manager">Product & Brand</TabsTrigger>
                  <TabsTrigger value="studio-team">Studio Team</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="ecommerce">eCommerce</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                  <TabsTrigger value="sales">Sales</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="product-manager" className="mt-6">
                <UserRoleCard 
                  title="Product & Brand Manager"
                  icon={FileUp}
                  stories={[
                    "I want to upload and manage product data in bulk, so I can efficiently update multiple products at once.",
                    "I want to share information on products or brands to key stakeholders."
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="studio-team" className="mt-6">
                <UserRoleCard 
                  title="Studio Team"
                  icon={Camera}
                  stories={[
                    "I want to create product data in the form of imagery, video, motion graphics, copy, styleguides and presentations and once approved upload them into the PIM.",
                    "I want to share information on products or brands to key stakeholders and ensure their information is relevant only to them."
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="marketing" className="mt-6">
                <UserRoleCard 
                  title="Marketing Team"
                  icon={Share2}
                  stories={[
                    "I want to enrich product descriptions with images, videos, and SEO-friendly content, so that they are optimized for online sales.",
                    "I want to tag products with categories and attributes, so they can be easily found and filtered by customers.",
                    "I want to localize product content for different regions, so I can effectively market to international customers."
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="ecommerce" className="mt-6">
                <UserRoleCard 
                  title="eCommerce Manager"
                  icon={Share2}
                  stories={[
                    "I want to syndicate product information to multiple marketplaces (Amazon, eBay, Shopify, etc.), so I can ensure product consistency across channels.",
                    "I want to set up automated rules for pricing and stock updates, so that all platforms reflect real-time information.",
                    "I want to integrate the PIM with my ERP and CRM systems, so that product data is seamlessly connected across the business."
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="support" className="mt-6">
                <UserRoleCard 
                  title="Customer Support Representative"
                  icon={Users}
                  stories={[
                    "I want to quickly search for detailed product specifications, so I can assist customers with their queries."
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="sales" className="mt-6">
                <UserRoleCard 
                  title="Sales Team"
                  icon={CheckCircle2}
                  stories={[
                    "I want to present information to my key accounts so that they can do proper range reviews or product reviews.",
                    "I want to use GTM Preso's or styleguides and share them with my key account partners.",
                    "I want to share key product or brand info to my key accounts so they can download them and use them on their own eCom, marketplace or PIM systems."
                  ]}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Use Cases</h2>
              <p className="mt-4 text-lg text-gray-600">
                Real-world applications of SalesChef in action
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 mt-12">
              <UseCaseCard 
                number={1}
                title="Bulk Product Import & Data Cleansing"
                steps={[
                  "A Product Manager imports a CSV file with thousands of product records.",
                  "The PIM system automatically detects and flags incomplete or incorrect data.",
                  "The system suggests missing attributes and allows manual or bulk corrections."
                ]}
              />
              
              <UseCaseCard 
                number={2}
                title="Product Data Enrichment & Categorization"
                steps={[
                  "A Marketing Specialist uploads high-resolution images and videos for a new product line.",
                  "The system auto-generates SEO-friendly descriptions using AI.",
                  "The system auto-generates images in different file sizes that are missing from the core data stored.",
                  "The specialist assigns category tags and attributes to improve discoverability."
                ]}
              />
              
              <UseCaseCard 
                number={3}
                title="Workflow for Product Approval"
                steps={[
                  "A Product Manager updates product specifications and submits them for approval.",
                  "A senior manager reviews the changes and approves or requests revisions.",
                  "Once approved, the updated product data is automatically published across all channels."
                ]}
              />
              
              <UseCaseCard 
                number={4}
                title="Multi-Channel Product Syndication"
                steps={[
                  "An eCommerce Manager selects a group of products to list on Amazon and Shopify.",
                  "The PIM formats and syncs the product information according to each platform's requirements.",
                  "Any updates made in the PIM (pricing, stock levels, descriptions) are automatically pushed to all connected sales channels."
                ]}
              />
              
              <UseCaseCard 
                number={5}
                title="Integration with ERP & CRM"
                steps={[
                  "A new product is added in the PIM and automatically synced with the ERP for inventory tracking.",
                  "Customer Support representatives can view real-time product availability and specifications from the CRM."
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Helper Components
interface UserRoleCardProps {
  title: string;
  icon: React.ElementType;
  stories: string[];
}

const UserRoleCard = ({ title, icon: Icon, stories }: UserRoleCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-full bg-purple-100">
          <Icon className="h-8 w-8 text-purple-800" />
        </div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>As a {title}, I want to...</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {stories.map((story, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 min-w-4 h-4 w-4 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-purple-600"></div>
              </div>
              <p className="text-gray-700">{story}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

interface UseCaseCardProps {
  number: number;
  title: string;
  steps: string[];
}

const UseCaseCard = ({ number, title, steps }: UseCaseCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6">
        <div className="flex items-center gap-3">
          <div className="bg-white text-purple-700 h-10 w-10 rounded-full flex items-center justify-center font-bold">
            {number}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Step</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {steps.map((step, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{step}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UseCases;
