"use client";

import * as z from "zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1),
});

const form = useForm<z.infer>

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  return (
    <Modal
      title="Buat Store"
      description="Tambahkan store untuk membuat produk dan kategori"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      Store Form
    </Modal>
  );
};
