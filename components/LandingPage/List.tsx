import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';
import { Button } from '../ui/button';
import Link from 'next/link';

interface MenuItem {
  id: number;
  label: string;
  avatarUrl: string;
  url?: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: 'Outlet Babys 70% OFF (Patrocinado)', avatarUrl: '/baby.webp', url: 'https://cartersbabys.com' },
  { id: 2, label: 'Visite nossa loja 💜', avatarUrl: '/baby.webp', url: 'https://cartersbabys.com' },
  { id: 3, label: 'A naninha mais vendida do Brasil 💜', avatarUrl: '/baby.webp', url: 'https://cartersbabys.com' },
  { id: 4, label: 'Mordedor 5 sentidos 💜', avatarUrl: '/baby.webp', url: 'https://cartersbabys.com' },
  { id: 5, label: 'Coleção de roupinhas 💜', avatarUrl: '/baby.webp', url: 'https://cartersbabys.com' },
  { id: 6, label: 'BabyTube Show', avatarUrl: '/baby.webp', url: '' },
  { id: 7, label: 'Shows', avatarUrl: '/baby.webp', url: '' },
  { id: 8, label: 'Ouça nossas músicas', avatarUrl: '/baby.webp', url: '' },
  { id: 9, label: 'Veja nossos episódios no YouTube!', avatarUrl: '/baby.webp', url: '' },
];

const MenuList: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="min-w-screen min-h-screen bg-[#8EBBFF] flex flex-col items-center justify-center p-12">
        {/* Avatar e Título */}
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-36 h-36 mb-8">
            <AvatarImage src="/baby.webp" alt="Avatar" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold text-white mb-2">BabyTube - Viih Tube</h1>
        </div>
        {/* Ajuste aqui */}
        <ul className="space-y-4 w-full flex flex-col items-center">
          {menuItems.map((item) => (
            <li key={item.id} className="group w-2/6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    className="w-full relative p-10 pl-16 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none transition-transform transform hover:scale-105 hover:shadow-lg"
                  >
                    <Link href={item.url || '#'}>
                      <div>
                        <Avatar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full">
                          <AvatarImage src={item.avatarUrl} alt={item.label} />
                          <AvatarFallback>{item.label.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-[#7c7878] text-[1.4em] text-center block">{item.label}</span>
                      </div>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="center" className="bg-white shadow-lg p-2 rounded-lg ml-2">
                  <Button asChild variant="ghost" className="w-full text-[#292828]">
                    <Link href={item.url || '#'}>Acessar</Link>
                  </Button>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
        <p className="text-sm font-bold text-[#ffffff] mt-4">Alguns Links podem estar manutenção</p>
      </div>
    </TooltipProvider>
  );
};

export default MenuList;
