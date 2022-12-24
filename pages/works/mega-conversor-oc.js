import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Mega Conversor-OC">
    <Container>
      <Title>
      Mega Conversor-OC <Badge>2021</Badge>
      </Title>
      <P>
      👾 Este proyecto comenzó cuando me di cuenta de que se podían 
      automatizar muchas conversiones y operaciones en la materia 
      “Organización de computadoras”. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nomadiix.github.io/Mega-Conversor-OC/">
            Mega-Conversor-OC <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repositorio</Meta>
          <Link href="https://github.com/NomaDiix/Mega-Conversor-OC">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css, Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="https://user-images.githubusercontent.com/55964635/207136852-3ae1adc8-8f4e-439f-b56f-b86cfeb8b18f.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
