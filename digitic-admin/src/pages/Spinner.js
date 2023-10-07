import styled from "styled-components";

function Spinner() {
  return (
    <Wrapper>
        <div className="loadingSpinner"></div>
    </Wrapper>
  );
}
export default Spinner;

const Wrapper = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

.loadingSpinner {
  width: 100px;
  height: 100px;
  border: 4px solid;
  border-color: white transparent white transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;