import styled from 'styled-components'

const Title = styled.h1`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ContactWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
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
    <ContactWrapper>
      <ContactLink><a target="_blank" href="https://www.linkedin.com/in/adrielerodr">LinkdIn</a></ContactLink>
      <ContactLink><a target="_blank" href="https://github.com/adrielerodr">GitHub</a></ContactLink>
      <ContactLink><a target="_blank" href="https://www.instagram.com/adrielerodr/">Instagram</a></ContactLink>
    </ContactWrapper>
  </>
}
