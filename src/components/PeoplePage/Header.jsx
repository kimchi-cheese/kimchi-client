import styled from "styled-components";
import { useState } from "react";
import ModalOverlay from "../ModalOverlay";
import LanguageModal from "./LanguageModal";
import AreaItem from "./AreaItem";

const StyledHeader = styled.div`
  width: 390px;
  height: 121px;
  display: flex;
  flex-direction: column;
  padding: 19px;
  background: #f7f7f7;

  .header-first-row {
    display: flex;
    justify-content: space-between;
  }

  .header-first-row > div {
    font-size: 32px;
    font-weight: 600;
  }

  img {
    width: 36px;
    height: 36px;
  }
`;

export default function Header() {
  // Area 토글 관리
  const [currentTitle, setCurrentTitle] = useState("Seoul");

  const handleContentClick = async (clickedTitle) => {
    setCurrentTitle(clickedTitle);
  };

  // Language 모달창 관리
  const [showLanguage, setShowLanguage] = useState(false);

  const showLanguageHandler = () => {
    setShowLanguage(true);
  };

  const hideLanguageHandler = () => {
    setShowLanguage(false);
  };

  return (
    <StyledHeader>
      <div className="header-first-row">
        <div>in</div>
        <button onClick={showLanguageHandler}>
          <img src="/assets/icons/language.svg" alt="language" />
        </button>
      </div>
      <AreaItem title={currentTitle} onContentClick={handleContentClick} />
      <ModalOverlay blur onHideModal={hideLanguageHandler} show={showLanguage}>
        <LanguageModal onHideModal={hideLanguageHandler} />
      </ModalOverlay>
    </StyledHeader>
  );
}
