import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  console.log(location.pathname);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex flex-row  justify-between  h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 ">
            <SidebarTrigger className="-ml-1 hover:bg-[#1f7a57]" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {location.pathname !== "/home" && (
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink
                      href="#"
                      onClick={handleBackClick}
                      className="flex items-center gap-2 text-muted-foreground hover:text-[#1f7a57]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1    flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl  p-2 md:min-h-min ">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
