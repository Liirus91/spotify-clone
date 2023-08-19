'use client';

import useUploadModal from '@/hooks/useUploadModal';
import Modal from './Modal';

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Add song"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
      description="Upload an mp3 file"
    >
      Form
    </Modal>
  );
};

export default UploadModal;
