import ConfirmBtn from "./ConfirmBtn";

const ModalContents = ({
  mode,
  cancelText = "취소",
  confirmText = "확인",
  title,
  contents,
  confirmAction = () => {},
  cancelAction = () => {},
}) => {
  switch (mode) {
    case "Confirmation":
      return (
        <div className="absolute inset-0 flex items-center justify-center w-screen h-screen">
          <div className="">
            <h1 className="modal-title_confirmation">{title}</h1>
            <p className="modal-content_confirmation">{contents}</p>
            <div className="modal-area-btn__confirmation">
              <ConfirmBtn
                className="modal-btn__confirmation"
                onClick={confirmAction}
              >
                {confirmText}
              </ConfirmBtn>
              <CancelBtn
                className="modal-btn_cancel__confirmation"
                onClick={cancelAction}
              >
                {cancelText}
              </CancelBtn>
            </div>
          </div>
        </div>
      );
    case "alert":
      return (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen">
          <div className="fixed inset-0 bg-[#1e1e1e] opacity-30"></div>

          <div className="relative bg-white px-12 py-6 rounded-[15px] flex flex-col items-center justify-center gap-2 text-[#121212]">
            <h1 className="mb-0 text-2xl text-center">{title}</h1>
            <p className="mb-8 text-base">{contents}</p>
            <div className="flex justify-center">
              <ConfirmBtn
                className="px-4 py-2 rounded-md bg-[#121212] text-white hover:opacity-90 transition"
                onClick={confirmAction}
              >
                {confirmText}
              </ConfirmBtn>
            </div>
          </div>
        </div>
      );
    default:
      throw new Error("Modal Mode Error: set modal mode necessarily.");
  }
};

export default ModalContents;
