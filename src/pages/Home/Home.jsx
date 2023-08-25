import { Container } from 'components/Layout/Layout.styled';
import { HomeSection, HomeTitle, Underlined } from './Home.styled';

function Home() {
  return (
    <Container>
      <HomeSection>
        <HomeTitle>Create your own <Underlined>contacts</Underlined> book!</HomeTitle>
      </HomeSection>
    </Container>
  );
}

export { Home };
