'use client';

import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title="Test modal title"
        description="Test modal description"
        onChange={() => {}}
        isOpen
      >
        Test Modalchildren
      </Modal>
    </>
  );
};

export default ModalProvider;
