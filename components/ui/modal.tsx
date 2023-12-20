"use client";

import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import React, { Fragment } from "react";
import IconButton from "./icon-button";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        <Transition show={open} appear as={Fragment}>
            <Dialog as="div" className="fixed inset-0" onClose={onClose}>
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative w-full max-w-3xl bg-white shadow-2xl rounded-lg text-left align-middle">
                            <div className="absolute top-4 right-4">
                                <IconButton
                                    onClick={onClose}
                                    icon={<X size={15} />}
                                />
                            </div>
                            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                                {children}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
