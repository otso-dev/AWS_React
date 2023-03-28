import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ModalButton from "../ModalButton/ModalButton";
import * as S from "./style";
/** @jsxImportSource @emotion/react */

const PromptModal = (props) => {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState("");
  //useEffect는 component가 나타나거나 사라질 때 사용
  useEffect(() => {
    console.log("test");
    setModalContent(props.todo.content);
    const handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        props.setIsOpen(false);
        setModalContent(props.todo.content);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [props]);

  const closeModal = () => {
    props.setIsOpen(false);
  };

  const contentChange = (e) => {
    setModalContent(e.target.value);
  };

  const onSubmit = () => {
    props.updateTodo({
      id: props.todo.id,
      content: modalContent,
    });
    closeModal();
  };

  const onSubmitKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log("kkk");
      onSubmit();
    }
  };

  return (
    <div css={S.modalContainer}>
      <div css={S.modalBox} ref={modalRef}>
        <header css={S.modalHeader}>
          <h1 css={S.modalTitle}>{props.title}</h1>
        </header>
        <main css={S.modalMain}>
          <input
            css={S.modalInput}
            type="text"
            onChange={contentChange}
            onKeyUp={onSubmitKeyUp}
            defaultValue={props.todo.content}
          />
        </main>
        <footer css={S.modalFooter}>
          <ModalButton onClick={onSubmit} buttonCount={2}>
            확인
          </ModalButton>
          <ModalButton onClick={closeModal} buttonCount={2}>
            취소
          </ModalButton>
        </footer>
      </div>
    </div>
  );
};

export default PromptModal;
