import SideNav from "@/app/ui/dashboard/sidenav";

/**
 * Um benefício de usar o layout é que, na navegação, 
 * apenas os componentes da página são atualizados, enquanto o layout não é renderizado novamente. 
 * Em Next.js, isso é chamado de renderização parcial.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
