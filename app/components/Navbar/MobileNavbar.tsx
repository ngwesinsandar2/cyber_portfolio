import { IUseDialogReturn } from '@/app/hooks/useDialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { Link, usePathname, useRouter } from '@/navigation';
import { Key } from 'react';

interface MobileNavbarPropsInterface {
  links: {
    id: Key;
    title: string;
    link_url: string;
  }[];
  dialog: IUseDialogReturn;
}

export default function MobileNavbar({
  links,
  dialog
}: MobileNavbarPropsInterface) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Drawer
      open={dialog.isOpen}
      onOpenChange={dialog.closeDialog}
    >
      <DrawerContent className="bg-black/20 backdrop-blur-lg">
        <div className="w-full p-6">
          <nav className="navbar">
            <ul className="flex flex-col items-center gap-4 text-lg">
              {links.map((item) => {
                return (
                  <li
                    className="relative"
                    key={item.id}
                    onClick={() => {
                      router.push(item.link_url);
                      dialog.closeDialog();
                    }}
                  >
                    <p
                      className={`${
                        item.link_url === pathname &&
                        'text-[var(--primary-color)]'
                      } uppercase font-2xl before:z-[-1]`}
                    >
                      [ {item.title} ]
                      {item.link_url === pathname && (
                        <div className="flex gap-1">
                          <div className="w-[60%] h-[2px] bg-[var(--primary-color)]"></div>
                          <div className="w-[20%] h-[2px] bg-[var(--primary-color)]"></div>
                          <div className="w-[20%] h-[2px] bg-[var(--primary-color)]"></div>
                        </div>
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
