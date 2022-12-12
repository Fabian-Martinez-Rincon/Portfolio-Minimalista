import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="El-Materias">
    <Container>
      <Title>
        El-Materias  <Badge>2022</Badge>
      </Title>
      <P>
        Blog en el que subo apuntes, opiniones o doy información 
        sobre temas que me gustan o tengo que estudiar
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Beautiful Jekyll</span>
        </ListItem>
        <ListItem>
          <Meta>Respositorio</Meta>
          <Link href="https://github.com/MITH-arg/EI-Materias-Web">
            El-MateriasWeb <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mith-arg.github.io/EI-Materias-Web/">
            El-Materias{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="https://user-images.githubusercontent.com/55964635/207115306-ae00dbe7-4708-4752-8135-2730f9efa02d.png" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
