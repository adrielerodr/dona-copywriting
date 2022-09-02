import styled from 'styled-components'

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubTitle = styled.h3`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ContactWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const ContactLink = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    transform: scale(1.05);
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;


export default function Home() {
  return <>
    <Title>Adriele Rodrigues</Title>
    <SubTitle>Copywriting para Mulheres</SubTitle>
    <ContactWrapper>
      <ContactLink><a target="_blank" href="https://www.instagram.com/donacopywriting/">Instagram</a></ContactLink>
    </ContactWrapper>
  </>
}
