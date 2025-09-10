import { createContext, useContext, useMemo, useState } from "react";
import ModalContents from "../components/modal/ModalContents";

const MODAL_CONTEXT = createContext({
  openedModals: [],
  openModal: () => {},
  closeModal: () => {},
});

const MODAL_TEMPLATE = {
  id: 0,
  title: "",
  contents: "",
  isfinish: false,
  mode: "alert",
  cancelText: "취소",
  confirmText: "확인",
};

export const ModalProvider = ({ children }) => {
  const [openedModals, setOpenedModal] = useState([]);

  const openModal = (modalData = MODAL_TEMPLATE) => {
    setOpenedModal((prev) => {
      if (prev.some(({ id }) => modalData.id === id)) return prev;
      return [...prev, { ...modalData }];
    });
  };
  const closeModal = (modalId) => {
    setOpenedModal((prev) => prev.filter(({ id }) => id !== modalId));
  };

  const handlers = useMemo(() => {
    return { openModal, closeModal };
  }, []);

  return (
    <MODAL_CONTEXT.Provider value={{ openedModals, ...handlers }}>
      {children}
      {openedModals.map(({ id, ...values }) => {
        return <ModalContents key={id} {...values} />;
      })}
    </MODAL_CONTEXT.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(MODAL_CONTEXT);
  if (!ctx)
    throw new Error("Modal Context Error: 모달 컨텍스트가 존재하지 않습니다");
  return ctx;
};

export const makeModalData = ({
  modalId,
  mode,
  title,
  contents,
  confirmAction,
  cancelAction,
  cancelText = "취소",
  confirmText = "확인",
}) => {
  if (mode === "alert") {
    return {
      id: modalId,
      mode,
      title,
      contents,
      confirmAction,
      confirmText,
    };
  } else {
    return {
      id: modalId,
      mode,
      title,
      contents,
      confirmAction,
      cancelAction,
      confirmText,
      cancelText,
    };
  }
};
