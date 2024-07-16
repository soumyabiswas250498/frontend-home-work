import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';
import { ReactNode } from "react";

interface ModalProps {
    open?: boolean;
    setIsOpen?: any;
    title?: string;
    children: ReactNode;
}

function Modal({ open, setIsOpen, children, title }: ModalProps) {
    if (!open) {
        return
    }
    return (
        <Dialog.Root open={open} >
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
                <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms] z-50">
                    <div className="flex items-center justify-between">
                        <Dialog.Title className="text-xl">{title || ''}</Dialog.Title>
                        <Dialog.Close onClick={() => { setIsOpen(false) }} className="text-gray-400 hover:text-gray-500">
                            <X className="text-red-500" />
                        </Dialog.Close>
                    </div>
                    {children}
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    );
}





export default Modal;