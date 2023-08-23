'use client';

import useUploadModal from '@/hooks/useUploadModal';
import Modal from './Modal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: { author: '', title: '', song: null, image: null },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {};

  return (
    <Modal
      title="Add song"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
      description="Upload an mp3 file"
    >
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </Modal>
  );
};

export default UploadModal;
