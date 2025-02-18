import { useState } from 'react';

export interface IUseDialogReturn {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openDialog: () => void;
  closeDialog: () => void;
}

export default function useDialog(): IUseDialogReturn {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return {
    isOpen,
    setIsOpen,
    openDialog,
    closeDialog
  };
}
