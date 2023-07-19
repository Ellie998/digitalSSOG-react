import TargetContent from "../TargetContent";
import Modal from "../UI/Modal";

export default function Modal_contents({
  className,
  onClickBackDrop,
  title,
  subTitle,
  children,
  cancelButton,
  submitButton,
  modalClassName,
}) {
  return (
    <Modal
      modalClassName={modalClassName}
      className={`${className} bg-white`}
      onClickBackDrop={onClickBackDrop}>
      <div className={`display_title ${title.className}`}>{title.content}</div>
      <div className={`display_subTitle--light ${subTitle.className}`}>
        {subTitle.content}
      </div>
      {children}
      <div className={`flex justify-end`}>
        <div
          className={`display_title--bold cursor-pointer ${cancelButton.className}`}
          onClick={onClickBackDrop}>
          {cancelButton.content}
        </div>
        <TargetContent
          targetOption={submitButton.targetOption}
          isNextDescriptionLink={submitButton.isNextDescriptionLink}>
          <div
            className={`display_title--bold cursor-pointer ${submitButton.className}`}>
            {submitButton.content}
          </div>
        </TargetContent>
      </div>
    </Modal>
  );
}

// kakao cancel text color text-blue-600
