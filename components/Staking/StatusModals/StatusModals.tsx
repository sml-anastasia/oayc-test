import React from "react";
import Processing from "./Content/Processing";
import Success from "./Content/Success";
import Fail from "./Content/Fail";
import Modal from "../../common/ovarlays/Modal";
import styled from "styled-components";

interface StatusModalsProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  dismissSuccess: () => void;
  dismissError: () => void;
}

const StyledModal = styled(Modal)`
  position: relative;
  color: #ff0420;
  background-color: #f0ebdf;
  border: none;
  display: flex;
  flex-direction: column;
`;

export const StatusModals = (props: StatusModalsProps) => {
  const { isLoading, isSuccess, isError, dismissSuccess, dismissError } = props;

  const dismiss = () => {
    if (isSuccess) {
      dismissSuccess();
    } else if (isError) {
      dismissError();
    }
  };

  const isOpen = isLoading || isSuccess || isError;

  return (
    <StyledModal isOpen={isOpen} onClose={dismiss}>
      {isLoading && <Processing />}
      {isSuccess && (
        <Success
        // onClose={dismiss}
        />
      )}
      {isError && (
        <Fail
        // onClose={dismiss}
        />
      )}
    </StyledModal>
  );
};
