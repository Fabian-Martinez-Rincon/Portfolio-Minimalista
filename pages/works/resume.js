import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        Resume <Badge>2021</Badge>
      </Title>
      <P>
        Es basicamente una plantilla de un curriculum hecho en la web 
        para poder personalizarla a mi gusto
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://fabian-martinez1.github.io/Resume/" target="_blank">
              Resume<ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Repositorio</Meta>
          <span>
            <Link href="https://github.com/Fabian-Martinez1/Resume" target="_blank">
              Github<ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <WorkImage src="https://user-images.githubusercontent.com/55964635/207139055-af18fcba-eba9-4e81-bdb5-c1d29171a90f.png" alt="Resume" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
