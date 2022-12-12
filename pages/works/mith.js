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
  <Layout title="MITH arg ">
    <Container>
      <Title>
        MITH arg  <Badge>2021</Badge>
      </Title>
      <P>
      Este es un lugar donde podras encontrar programas, paginas, 
      herramientas desarrolladas por otros programadores con la intencion 
      de contribuir con sus pares.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/MITH-arg/">
            MITH arg <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="https://user-images.githubusercontent.com/55964635/207135029-f79f1046-3020-4ad8-9652-63e06b8f50a0.svg" alt="STYLY" />
      <WorkImage src="https://readme-typing-svg.herokuapp.com?size=26&duration=2000&background=FF000000&multiline=true&lines=Mi+Idea%2C+Tu+Herramienta" alt="STYLY" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
