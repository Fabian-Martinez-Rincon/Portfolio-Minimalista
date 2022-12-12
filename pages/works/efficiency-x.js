import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Efficiency X">
    <Container>
      <Title>
      Efficiency X <Badge>2021</Badge>
      </Title>
      <P>
        Mientras cursaba la materias CADP me di cuenta de que podia automatizar una practica que me
        daba fiaca calcular a mano e hice una pequeña web en la que pones el codigo
        y te calcula la memoria fisica, para tuve que aprender bastante sobre expresiones
        regulares.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css, Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Web</Meta>
          <Link href="https://fabian-martinez1.github.io/Efficiency_X/">
            Efficiency X
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repositorio</Meta>
          <Link href="https://github.com/Fabian-Martinez1/Efficiency_X">Github</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="https://user-images.githubusercontent.com/55964635/207165483-ae4c1ea8-36e4-4cb7-a1da-cfa4f78eca7f.png" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
