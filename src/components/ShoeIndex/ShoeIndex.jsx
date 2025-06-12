import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";
import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}>
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>

        <MobileHeader>
        <BreadcrumbsWrapper>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
          <Title>Running</Title>
        </BreadcrumbsWrapper>
        <SelectWrapper>
        <Select
          label="Sort"
          value={sortId}
          onChange={(ev) => setSortId(ev.target.value)}>
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
        </Select>
        </SelectWrapper>
      </MobileHeader>

        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>

      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>

    
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    align-items: flex-start;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const MobileHeader = styled.header`
  display: none;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: flex;
    justify-content: space-between
  }
`;

const BreadcrumbsWrapper = styled.div``;

const SelectWrapper = styled.div`
@media (max-width: ${BREAKPOINTS.phone}rem){
  display: none
}
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

export default ShoeIndex;
