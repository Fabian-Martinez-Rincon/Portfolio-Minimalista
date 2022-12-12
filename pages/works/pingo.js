import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Pingo">
    <Container>
      <Title>
        Pingo <Badge>2022</Badge>
      </Title>
      <P>
        Yo hice la parte del frontend, ya que un amigo queria generar 
        memes que contengan un token unico
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repositorio</Meta>
          <span>
            <Link href="https://github.com/Juanuwu/PIngo" target="_blank">
              Pingo<ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Html / Css / Javascript
          </span>
        </ListItem>
      </List>

      <WorkImage src="https://user-images.githubusercontent.com/55964635/207121584-1d6d9852-05d8-41fd-959f-9e60d4065e08.png" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
