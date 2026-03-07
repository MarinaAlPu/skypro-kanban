import { SWrapper, SContainer, SBlock, SContent, SIcon, STitle, SMessage, SMessageWrapper } from "./PopError.styled";
import { Button } from "../../button/Button";


export const PopError = ({ errorMessage, onClose }) => {
  return (
    <SWrapper>
      <SContainer>
        <SBlock>
          <SContent>
            {/* <SIcon>❌</SIcon> */}
            <SIcon>🔴</SIcon>
            {/* <SIcon>🚩</SIcon> */}
            {/* <STitle>Ошибка 🔴</STitle> */}
            {/* <STitle>Ошибка 🚩</STitle> */}
            <STitle>Ошибка</STitle>
            <SMessageWrapper>
              <SMessage>{errorMessage}</SMessage>
              <Button
                width="72px"
                text="ОК"
                type="primary"
                disabled={false}
                onClick={onClose}
              >
              </Button>
            </SMessageWrapper>
          </SContent>
        </SBlock>
      </SContainer>
    </SWrapper>
  )
}